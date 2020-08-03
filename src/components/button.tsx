import React from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkComponent } from 'gatsby'

// Components
import IconComponent from './icons/icon'

// Styles
import {
  yellow,
  yellowDark,
  dark,
  darkest,
  green,
  white,
  greenDark,
  lightGrey,
} from '../styles/colors'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
interface IProps {
  icon?: boolean
  className?: string
  to?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  target?: string
  inverse?: boolean
  onClick?: () => void
}

const Button: React.FC<IProps> = ({
  children,
  icon,
  className,
  to,
  disabled,
  type,
  target,
  inverse,
  onClick,
}) => {
  const Content = () => (
    <>
      <span>{children}</span>
      {icon && <Icon icon="arrow" width={24} height={16} />}
    </>
  )

  let result

  if (
    to &&
    (to.includes('tel:') || to.includes('mailto:') || to.includes('http'))
  ) {
    result = (
      <Link className={className} href={to} target={target} inverse={inverse}>
        <Content />
      </Link>
    )
  } else if (to) {
    result = (
      <GatsbyLink className={className} to={to} inverse={inverse}>
        <Content />
      </GatsbyLink>
    )
  } else {
    result = (
      <Container
        className={className}
        disabled={disabled}
        type={type}
        inverse={inverse}
        onClick={onClick}
      >
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
      fill: ${darkest};
    }
  }

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

  ${mediaQueries.from.breakpoint.XL`
  padding: 12px 32px;

  :hover {
    > ${Icon} {
      transform: translateX(16px);
    }
  }
`}
`

const inverseStyle = css`
  display: inline-flex;
  align-items: center;
  background: ${white};
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  color: ${green};
  ${textStyles.highlight}
  transition: background 0.2s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  > ${Icon} {
    fill: ${green};
  }

  :hover {
    color: ${greenDark};

    > ${Icon} {
      transform: translateX(8px);
      fill: ${greenDark};
    }
  }

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

  ${mediaQueries.from.breakpoint.XL`
  padding: 12px 32px;

    :hover {
      > ${Icon} {
        transform: translateX(16px);
      }
    }
  `}
`

export const hoverStyle = css`
  background: ${yellowDark};
  color: ${darkest};

  > ${Icon} {
    transform: translateX(8px);
    fill: ${darkest};
  }

  ${mediaQueries.from.breakpoint.XL`
    > ${Icon} {
      transform: translateX(16px);
    }
  `}
`

export const inverseHoverStyle = css`
  color: ${greenDark};

  > ${Icon} {
    transform: translateX(8px);
    fill: ${greenDark};
  }

  ${mediaQueries.from.breakpoint.XL`
    > ${Icon} {
      transform: translateX(16px);
    }
  `}
`

const Container = styled.button<{ inverse?: boolean }>`
  ${({ inverse }) => (inverse ? inverseStyle : style)}
`

const GatsbyLink = styled(LinkComponent)<{ inverse?: boolean }>`
  ${({ inverse }) => (inverse ? inverseStyle : style)}
`

const Link = styled.a<{ inverse?: boolean }>`
  ${({ inverse }) => (inverse ? inverseStyle : style)}
`
