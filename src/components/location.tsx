import React from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import IconComponent from './icons/icon'

// Styles
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import { green } from '../styles/colors'

// Types
interface IProps {
  image: string
  companyName: string
  address: IAddress
  phone: string
  email: string
}

interface IAddress {
  street: string
  postalCodeAndCity: string
  postbox: string
  postboxCodeAndCity: string
}

const Location: React.FC<IProps> = ({
  image,
  companyName,
  address,
  phone,
  email,
}) => (
  <Container>
    <ImageContainer
      href={`https://www.google.com/maps/dir//${address.street}%20${address.postalCodeAndCity}`}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <MapImage background={image} />
    </ImageContainer>
    <OuterWrapper>
      <CompanyName>{companyName}</CompanyName>
      <InnerWrapper>
        <Address>
          <AddressLine>{address.street}</AddressLine>
          <AddressLine>{address.postalCodeAndCity}</AddressLine>
          <AddressLine>{address.postbox}</AddressLine>
          <AddressLine>{address.postboxCodeAndCity}</AddressLine>
        </Address>
        <ContactWrapper>
          <Contact href={`tel:${phone}`}>
            <Icon icon="phone" />
            <Label>{`${phone.slice(0, 4)} - ${phone.slice(4)}`}</Label>
          </Contact>
          <Contact href={`mailto:${email}`}>
            <Icon icon="mail" />
            <Label>{email}</Label>
          </Contact>
          <RoutePlanner
            href={`https://www.google.com/maps/dir//${address.street}%20${address.postalCodeAndCity}`}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Icon icon="arrow" />
            <Label>Route Plannen</Label>
          </RoutePlanner>
        </ContactWrapper>
      </InnerWrapper>
    </OuterWrapper>
  </Container>
)

export default Location

const Container = styled(ContainerComponent)`
  margin: 0 24px 64px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 0 80px;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: flex;
    align-items: center;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin: 0 auto 160px;
    padding: 0 20px;
  `}
`

const MapImage = styled.div<{ background: string }>`
  ${aspectRatioChild}
  border-radius: 2px;

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const ImageContainer = styled.a`
  ${aspectRatio(288, 208)}
  display: block;
  margin-bottom: 24px;
  overflow: hidden;

  ${MapImage} {
    transform: scale(2);
  }

  ${mediaQueries.from.breakpoint.S`
    ${MapImage} {
      transform: scale(1.7);
    }
  `}

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(720, 400)}
    margin-bottom: 40px;

    ${MapImage} {
      transform: scale(1.5);
    }
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(472, 432)}
    margin-bottom: 0;
    margin-right: 32px;
    flex-basis: 50%;

    ${MapImage} {
      transform: scale(1.2);
    }
  `}

  ${mediaQueries.from.breakpoint.XL`
    ${aspectRatio(600, 432)}
    margin-right: 128px;

    ${MapImage} {
      transform: scale(1);
    }
  `}
`

const OuterWrapper = styled.div``

const CompanyName = styled.h1`
  ${textStyles.headingSubtle}
  margin: 0 0 16px;
`

const InnerWrapper = styled.div`
  ${mediaQueries.from.breakpoint.M`
    display: flex;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: block;
  `}
`

const Address = styled.address`
  ${textStyles.plainNormal}
  font-style: normal;
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.M`
    flex: 0 0 50%;
    margin-bottom: 0;
  `}

  ${mediaQueries.from.breakpoint.L`
    margin-bottom: 24px;
  `}
`

const AddressLine = styled.p`
  margin: 0;
`

const ContactWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.M`
    flex: 0 0 100%;
    align-items: flex-start;
  `}
`

const Icon = styled(IconComponent)`
  margin-right: 16px;
  transition: stroke 0.2s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`

const Contact = styled.a`
  ${textStyles.highlight}
  margin-bottom: 16px;
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s cubic-bezier(0, 0, 0, 1), color 0.2s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  :hover {
    color: ${green};
    transform: translateX(16px);

    ${Icon} {
      stroke: ${green};
    }
  }

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 20px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 16px;
  `}
`

const Label = styled.span``

const RoutePlanner = styled(Contact)`
  margin: 0;

  :hover {
    ${Icon} {
      stroke: none;
      fill: ${green};
    }
  }

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 0;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 0;
  `}
`
