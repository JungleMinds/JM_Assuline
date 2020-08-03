import React from 'react'
import styled from 'styled-components'

// Components
import IconComponent from './icons/icon'

// Styles
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import { green } from '../styles/colors'

// Types
import { ITeamMember } from '../types/entities'

interface IProps extends ITeamMember {
  className?: string
}

const TeamCard: React.FC<IProps> = ({
  image,
  name,
  phone,
  email,
  className,
}) => {
  const modifyPhone = (phoneNumber: string) => {
    const modifiedNumber = phoneNumber.replace(/ /g, '').match(/\+?[0-9]{1,2}/g)
    return (modifiedNumber && modifiedNumber.join(' ')) || phoneNumber
  }

  return (
    <Container className={className}>
      <ImageContainer>
        <Image background={image} />
      </ImageContainer>
      <Name>{name}</Name>
      <Address>
        <Contact href={`tel:${phone}`}>
          <Icon icon="phone" />
          <Label>{modifyPhone(phone)}</Label>
        </Contact>
        <Contact href={`mailto:${email}`}>
          <Icon icon="mail" />
          <Label>{email}</Label>
        </Contact>
      </Address>
    </Container>
  )
}

export default TeamCard

const Container = styled.div`
  margin: 0 0 64px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 56px;
    width: calc(50% - 12px);
  `}

  ${mediaQueries.from.breakpoint.L`
    width: calc(33.3% - 21px);
  `}

  ${mediaQueries.from.breakpoint.XL`
    width: calc(33.3% - 16px);
    margin-bottom: 136px;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(288, 368)}
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(348, 446)}
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(304, 389)}
  `}

  ${mediaQueries.from.breakpoint.XL`
    ${aspectRatio(392, 502)}
  `}
`

const Image = styled.div<{ background: string }>`
  ${aspectRatioChild}
  border-radius: 2px;

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const Name = styled.h2<{ review?: string }>`
  ${textStyles.headingSubtle}
  margin: 0;
  margin-bottom: 16px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 24px;
  `}
`

const Address = styled.address`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-style: normal;
`

const Icon = styled(IconComponent)`
  margin-right: 16px;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`

const Label = styled.span`
  ${textStyles.highlight}
`

const Contact = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
  transition: transform 0.2s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  :hover {
    color: ${green};
    transform: translateX(8px);

    ${Icon} {
      stroke: ${green};
    }
  }

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 24px;
  `}
`
