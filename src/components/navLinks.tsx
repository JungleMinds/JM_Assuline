import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Components
import Icon from "./icons/icon"

// Styles
import * as textStyles from "../styles/textStyles"
import { dark } from "../styles/colors"
import mediaQueries from "../styles/mediaQueries"

const NAV_ITEMS = ["Home", "Team", "Hypotheken", "Verzekeren", "Contact"]

interface IProps {
  subtle?: boolean
  marginBottom?: number
}

const NavLinks: React.FC<IProps> = ({ subtle }) => {
  const mapItemsIntoNavLinks = (items: string[]): any =>
    items.map((item, index) => (
      <ListItem key={item} marginBottom={index !== items.length - 1 ? 24 : 22}>
        <StyledLink
          to={index === 0 ? `/` : `/${item}`}
          activeClassName="active"
          partiallyActive={index === 0 ? false : true}
        >
          {item}
        </StyledLink>
      </ListItem>
    ))

  return (
    <List subtle={subtle}>
      {mapItemsIntoNavLinks(NAV_ITEMS)}
      <ListItem>
        <A href={`https://jungleminds.com`} rel="noopener noreferrer">
          Login
          <Icon icon="external" width={24} height={24} />
        </A>
      </ListItem>
    </List>
  )
}

export default NavLinks

const List = styled.ul<IProps>`
  ${({ subtle }) =>
    subtle ? textStyles.highlightSubtle : textStyles.highlight}
  list-style: none;
  margin: 0;
  padding-left: 16px;
  transition: font-size 0.2s ease;

  ${mediaQueries.from.breakpoint.M`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

const ListItem = styled.li<IProps>`
  margin-bottom: ${props => props.marginBottom}px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 0;
  `}
`

const StyledLink = styled(Link)`
  position: relative;

  &.active {
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: 24px;
      left: 0;
      background: ${dark};
    }
  }

  ${mediaQueries.from.breakpoint.XL`
    &.active {
      ::after {
        top: 32px;
      }
    }
  `}
`

const A = styled.a`
  display: flex;
  align-items: center;
`
