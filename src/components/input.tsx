import React from 'react'
import styled from 'styled-components'

// Components
import IconComponent from './icons/icon'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import { yellow, dark, red } from '../styles/colors'

// Types
import { IInputProps } from '../types/entities'

const Input: React.FC<IInputProps> = ({
  icon,
  placeholder,
  type,
  name,
  onChange,
  onBlur,
  value,
  hasError,
  touched = false,
}) => {
  return (
    <InputContainer hasError={hasError} touched={touched}>
      <Icon icon={icon} color={hasError ? red : dark} />
      <InputField
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </InputContainer>
  )
}

export default Input

const Icon = styled(IconComponent)`
  margin-right: 8px;
  flex: 0 0 24px;
`

const InputContainer = styled.div<{
  hasError: undefined | boolean
  touched: boolean
}>`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
  position: relative;
  margin-bottom: 42px;

  :before,
  :after {
    display: block;
    content: '';
    position: absolute;
    right: 0;
    bottom: -8px;
    left: 0;
    height: 2px;
    border-radius: 1px;
    pointer-events: none;
    transition: transform 1.1s cubic-bezier(0, 1, 0, 1);
  }

  :before {
    background-color: ${props => (props.hasError ? red : dark)};
    transform: scaleX(0);
    transform-origin: left;
  }

  :after {
    background-color: ${props =>
      props.hasError ? red : props.touched ? dark : yellow};
    transform-origin: right;
  }

  :focus-within,
  :hover {
    :before {
      transform: scaleX(1);
    }

    :after {
      transform: scaleX(0);
    }
  }

  ${mediaQueries.from.breakpoint.XL`
    margin-right: 24px;
    margin-bottom: 0;

    :before,
    :after {
      bottom: -10px;
    }
  `}
`

const InputField = styled.input`
  ${textStyles.plainSubtle}
  border: none;
  width: calc(100% - 8px);
  height: 100%;
  outline: none;
  text-overflow: ellipsis;
  cursor: pointer;

  ::placeholder {
    ${textStyles.plainSubtle}
    color: ${dark};
    opacity: 1;
  }
`
