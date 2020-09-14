import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import { normalizeFooterData } from '../util/data'

// Components
import IconComponent from './icons/icon'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import { green } from '../styles/colors'

// Types
import { INavLinkItem } from '../types/entities'

const Footer: React.FC = () => {
  const queryData = useStaticQuery(graphql`
    query ContentQuery {
      allPrismicContentPage(
        filter: {
          url: {
            in: ["/informatie/privacy-statement/", "/informatie/disclaimer/"]
          }
        }
      ) {
        edges {
          node {
            url
            data {
              page_title {
                text
              }
            }
            type
            uid
          }
        }
      }
      prismicHomePage {
        url
        uid
        type
      }
      prismicMortgagePage {
        url
        uid
        type
      }
      prismicAssurancePage {
        url
        uid
        type
      }
      prismicTeamPage {
        url
        uid
        type
      }
      prismicContactPage {
        url
        uid
        type
        data {
          body {
            ... on PrismicContactPageBodyLocation {
              primary {
                location_address_street
                location_address_postalcode
                location_address_city
                location_phone
                location_email
              }
            }
          }
        }
      }
    }
  `)

  const data = normalizeFooterData(queryData)

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Logo icon="logo" width={169} height={88} footer />
          <TopSection>
            <NavLinks>
              {data.nav.map(item => (
                <ListItem key={`nav-item-${item.label}`}>
                  <StyledNavLink to={item.url} activeClassName="active">
                    <Icon icon="arrow" />
                    {item.label}
                  </StyledNavLink>
                </ListItem>
              ))}
            </NavLinks>
            <Address>
              <AddressList>
                <ListItem>
                  <StyledAddressLink href={`tel:${data.address.phone}`}>
                    <Icon icon="phone" width={24} height={24} />
                    {`${data.address.phone.slice(
                      0,
                      4
                    )} - ${data.address.phone.slice(4)}`}
                  </StyledAddressLink>
                </ListItem>
                <ListItem>
                  <StyledAddressLink href={`mailto:${data.address.email}`}>
                    <Icon icon="mail" width={24} height={24} />
                    {data.address.email}
                  </StyledAddressLink>
                </ListItem>
                <ListItem>
                  <StyledAddressLink
                    href={`https://www.google.com/maps/search/${data.address.location}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="location" width={24} height={24} />
                    {data.address.location}
                  </StyledAddressLink>
                </ListItem>
              </AddressList>
            </Address>
          </TopSection>
        </InnerWrapper>
        <BottomSection>
          <BottomTexts>
            <Copyright>
              &copy; Copyright Assuline BV {new Date().getFullYear()}
            </Copyright>
            <Statements>
              {data.links.map((link: INavLinkItem) => (
                <StyledLink key={link.label} to={link.url}>
                  {link.label}
                </StyledLink>
              ))}
            </Statements>
          </BottomTexts>
          <LogoContainer>
            <Image src="/images/kifid.png" alt="Kifid Logo" />
            <Image src="/images/connect.png" alt="Connect Logo" />
          </LogoContainer>
        </BottomSection>
      </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px 32px;
  ${textStyles.highlight}

  ${mediaQueries.from.breakpoint.M`
    padding-left: 24px;
    padding-right: 24px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 64px 32px;
  `}
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: auto;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.L`
    flex-direction: row;
    justify-content: space-between;
  `}

  ${mediaQueries.from.breakpoint.XL`
    justify-content: space-between;
  `}
`

const Logo = styled(IconComponent)`
  margin-top: -12px;

  ${mediaQueries.from.breakpoint.S`
    margin-top: -20px;
  `}
`

const TopSection = styled.section`
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.M`
    width: 100%
    flex-direction: row;
  `}

  ${mediaQueries.from.breakpoint.L`
    width: 66%
  `}

  ${mediaQueries.from.breakpoint.XL`
    width: 55%;
    justify-content: flex-end;
  `}
`

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0;

  ${mediaQueries.from.breakpoint.M`
    width: 50%;
  `}
`

const Address = styled.address`
  font-style: normal;
`

const AddressList = styled(NavLinks)`
  ${mediaQueries.from.breakpoint.M`
    width: initial;
  `}
`

const Icon = styled(IconComponent)`
  margin-right: 16px;
  flex: 0 0 ${({ width }) => width}px;
`

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
`

const StyledAddressLink = styled.a`
  display: flex;
  align-items: center;

  :hover {
    ${Icon} {
      fill: none !important;
      stroke: ${green};
    }
  }
`

const ListItem = styled.li`
  display: table;
  margin-bottom: 16px;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  ${StyledNavLink}, ${StyledAddressLink} {
    transition: transform 0.2s cubic-bezier(0, 0, 0, 1);
    transform-style: preserve-3d;
    backface-visibility: hidden;

    :hover {
      color: ${green};
      transform: translateX(16px);

      ${Icon} {
        fill: ${green};
      }
    }
  }
`

const BottomSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries.from.breakpoint.M`
    flex-direction: row;
    align-items: center;
  `}
`

const BottomTexts = styled.div`
  display: flex;
  flex-direction: column;
  ${textStyles.plainSubtle}

  ${mediaQueries.from.breakpoint.M`
    flex-direction: row;
    justify-content: space-between;
  `}

  ${mediaQueries.from.breakpoint.L`
    width: 50%;
    justify-content: start;
  `}
`

const Copyright = styled.span`
  margin: 24px 0;

  ${mediaQueries.from.breakpoint.M`
    margin: 0;
    margin-right: 32px;
  `}
`

const Statements = styled(InnerWrapper)`
  flex-direction: row;

  ${mediaQueries.from.breakpoint.L`
    width: 50%;
    justify-content: start;
  `}
`

const StyledLink = styled(Link)`
  margin-right: 32px;
  margin-bottom: 32px;

  :hover {
    text-decoration: underline;
  }

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 0;

    :last-of-type {
      margin-right: 0;
    }
  `}
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${mediaQueries.from.px(375)`
    flex-direction: row;
    align-items: center;
  `}

  ${mediaQueries.from.breakpoint.M`
  max-width: 33%;
`}

  ${mediaQueries.from.breakpoint.L`
  width: 50%;
  justify-content: end;
`}

${mediaQueries.from.breakpoint.XL`
  width: initial;
`}
`

const Image = styled.img`
  :first-of-type {
    margin-bottom: 24px;

    ${mediaQueries.from.px(375)`
      margin-bottom: 0;
      margin-right: 40px;
    `}

    ${mediaQueries.from.breakpoint.M`
      margin-right: 24px;
      max-width: 60%;
    `}

    ${mediaQueries.from.breakpoint.L`
      margin-right: 56px;
    `}
  }

  :last-of-type {
    ${mediaQueries.from.breakpoint.M`
    max-width: 30%;
  `}
  }
`
