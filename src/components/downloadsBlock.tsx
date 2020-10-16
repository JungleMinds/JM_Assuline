import React from 'react'
import styled from 'styled-components'

// Components
import ButtonComponent from './button'
import IconComponent from './icons/icon'

// Styles
import { green } from '../styles/colors'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
import { IButton } from '../types/entities'
interface IProps {
  title: string
  items: any
  button: IButton
}

const DownloadsBlock: React.FC<IProps> = ({ title, items, button }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DownloadList>
        {items.map((item: any) => (
          <DownloadLink href={item.url} target="_blank">
            <Icon icon="download" />
            <Label>{item.label}</Label>
          </DownloadLink>
        ))}
      </DownloadList>
      {button && (
        <Button to={button.url} icon>
          {button.label}
        </Button>
      )}
    </Container>
  )
}

export default DownloadsBlock

const Container = styled.div`
  margin: 0 44px 48px;
  padding: 0;

  &:last-of-type {
    margin-bottom: 64px;
  }

  ${mediaQueries.from.breakpoint.XL`
    max-width: 808px;
    margin: 0 auto 48px;

    &:last-of-type {
      margin-bottom: 160px;
    }
  `}
`

const Title = styled.h2`
  margin: 0 0 24px;

  ${textStyles.headingSubtle}
`

const DownloadList = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const Icon = styled(IconComponent)`
  margin-right: 16px;
  flex: 0 0 24px;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`

const Label = styled.span`
  ${textStyles.highlight}
  transform-style: preserve-3d;
  backface-visibility: hidden;
`

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s cubic-bezier(0, 0, 0, 1);
  margin: 0 0 32px;

  &:last-of-type {
    margin: 0;
  }

  :hover {
    color: ${green};
    transform: translateX(16px);

    > ${Icon} {
      stroke: ${green};
    }
  }
`

const Button = styled(ButtonComponent)`
  margin-top: 40px;
`
