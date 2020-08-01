import React from 'react'
import styled from 'styled-components'

// Components
import IconComponent from './icons/icon'
import RichText from './richText'

// Styles
import { yellow, lightGrey, darkest, yellowDark, dark } from '../styles/colors'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
interface IProps {
  title: string
  paragraph: any
  className?: string
  isOpen: boolean
  handleClick: () => void
}

const Accordion: React.FC<IProps> = ({
  title,
  paragraph,
  className,
  isOpen,
  handleClick,
}) => (
  <Container isOpen={isOpen} className={className}>
    <LabelWrapper isOpen={isOpen}>
      <IconContainer onClick={handleClick}>
        <Icon icon="chevron" width={16} height={16} isOpen={isOpen} />
      </IconContainer>
      <Label onClick={handleClick}>{title}</Label>
    </LabelWrapper>
    {isOpen && (
      <Paragraph onClick={handleClick}>
        <RichText content={paragraph.raw} />
      </Paragraph>
    )}
  </Container>
)

export default Accordion

const Container = styled.li<{ isOpen: boolean }>`
  padding: 8px 8px 0;
  border-radius: 2px;
  ${props =>
    props.isOpen &&
    `
    background: ${lightGrey};
    padding: 8px 8px 24px;
  `}
  transition: background 0.2s ease, padding 0.2s ease;

  ${mediaQueries.from.breakpoint.M`
    padding-left: 16px;
    padding-right: 16px;
  `}

  ${mediaQueries.from.breakpoint.L`
    padding-top: 16px;
    ${(props: { isOpen: boolean }) =>
      props.isOpen &&
      `
      padding-bottom: 40px;
    `}
  `}
`

const Label = styled.p`
  margin: 0;
  color: ${dark};
  transition: color 0.2s ease-in-out;
  cursor: pointer;
`

const Paragraph = styled.div`
  ${textStyles.plainSubtle}
  padding: 0 24px;
  margin: 0;
  cursor: pointer;

  ${mediaQueries.from.breakpoint.L`
    padding-left: 64px;
  `}
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
  background: ${yellow};
  flex: 0 0 32px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  ${mediaQueries.from.breakpoint.L`
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    margin-right: 24px;
  `}
`

const Icon = styled(IconComponent)`
  stroke-width: 3;
`

const LabelWrapper = styled.div<{ isOpen: boolean }>`
  height: 40px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  ${props => props.isOpen && 'margin-bottom: 8px;'}

  :hover {
    ${IconContainer} {
      background: ${yellowDark};
    }

    ${Label} {
      color: ${darkest};
    }
  }
`
