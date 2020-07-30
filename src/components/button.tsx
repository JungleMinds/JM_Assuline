import React from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkComponent } from 'gatsby'

// Components
import IconComponent from './icons/icon'

// Styles
import { yellow, yellowDark, dark, darkest, lightGrey } from '../styles/colors'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
interface IProps {
  icon?: boolean
  className?: string
  to?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  color?: string
  target?: string
}

const Button: React.FC<IProps> = ({
  children,
  icon,
  className,
  to,
  disabled,
  type,
  color,
  target,
}) => {
  const Content = () => (
    <>
      <span>{children}</span>
      {icon && (
        <Icon icon="arrow" width={24} height={16} color={color || dark} />
      )}
    </>
  )

  let result

  if (
    to &&
    (to.includes('tel:') || to.includes('mailto:') || to.includes('http'))
  ) {
    result = (
      <Link className={className} href={to} target={target}>
        <Content />
      </Link>
    )
  } else if (to) {
    result = (
      <GatsbyLink className={className} to={to}>
        <Content />
      </GatsbyLink>
    )
  } else {
    result = (
      <Container className={className} disabled={disabled} type={type}>
        <Content />
      </Container>
    )
  }

  return result
}

export default Button

const Icon = styled(IconComponent)`
  margin-left: 8px;
  flex: 0 0 24px;
  transition: transform 0.2s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`

const style = css`
  display: inline-flex;
  align-items: center;
  background: ${yellow};
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  color: ${dark};
  ${textStyles.highlight}
  transition: background 0.2s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  :hover {
    background: ${yellowDark};
    color: ${darkest};

    > ${Icon} {
      transform: translateX(8px);
    }
  }

  ${mediaQueries.from.breakpoint.XL`
  padding: 12px 32px;

  :hover {
    > ${Icon} {
      transform: translateX(16px);
    }
  }
`}
`

const Container = styled.button`
  ${style}

  :disabled {
    background: ${lightGrey};
    cursor: wait;

    > span,
    > ${Icon} {
      opacity: 0.4;
    }

    :hover {
      background: ${lightGrey};
      color: ${dark};
    }
  }
`

const GatsbyLink = styled(LinkComponent)`
  ${style}
`

const Link = styled.a`
  ${style}
`
