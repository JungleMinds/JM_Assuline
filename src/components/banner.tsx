import React from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import PictogramComponent from './pictograms/pictogram'
import ButtonComponent from './button'
import IconComponent from './icons/icon'

// Styles
import { white, green } from '../styles/colors'
import * as textStyles from '../styles/textStyles'
import aspectRation from '../styles/aspectRatio'
import mediaQueries from '../styles/mediaQueries'

// Types
import { IButton, IStaticFile } from '../types/entities'
interface IProps {
  heading: string
  button?: IButton
  asset?: IStaticFile
}

const Banner: React.FC<IProps> = ({ heading, button, asset }) => {
  return (
    <Container>
      <Wrapper>
        <PictogramWrapper>
          <Pictogram pictogram="banner" color={white} />
        </PictogramWrapper>
        <Heading>{heading}</Heading>
        {button && (
          <Button to={button.url} icon>
            {button.label}
          </Button>
        )}
      </Wrapper>
      {asset && (
        <DownloadLink href={asset.url}>
          <Icon icon="download" />
          <Label>{asset.label}</Label>
        </DownloadLink>
      )}
    </Container>
  )
}

export default Banner

const Container = styled(ContainerComponent)`
  margin: 0 24px 64px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 0 80px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin: 0 auto 160px;
    padding: 0 20px;
  `}
`

const Wrapper = styled.div`
  padding: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${green};
  border-radius: 2px;

  ${mediaQueries.from.breakpoint.M`
    padding: 48px 40px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 40px;
    padding: 48px 80px;
    flex-direction: row;
    align-items: center;
  `}
`

const PictogramWrapper = styled.div`
  ${aspectRation(224, 78)}
  margin-bottom: 32px;
  width: 224px;
  flex: 0 0 78px;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRation(312, 106)}
    margin-bottom: 40px;
    width: 312px;
    flex: 0 0 106px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    ${aspectRation(232, 106)}
    margin-bottom: 0;
    margin-right: 104px;
    flex: 0 0 232px;
  `}
`

const Pictogram = styled(PictogramComponent)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`

const Heading = styled.h2`
  ${textStyles.headingSubtle}
  margin: 0 0 32px;
  color: ${white};
  max-width: 100%;

  :last-child {
    margin: 0;
  }

  ${mediaQueries.from.breakpoint.XL`
    margin-right: 104px;
    margin-bottom: 0;

    :last-child {
      margin-right: 104px;
    }
  `}
`

const Button = styled(ButtonComponent)`
  background: ${white};
  flex-shrink: 0;

  :hover {
    background: ${white};
  }
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

  :hover {
    color: ${green};
    transform: translateX(16px);

    > ${Icon} {
      stroke: ${green};
    }
  }
`
