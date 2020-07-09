import React from "react"
import styled from "styled-components"
import { Link as LinkComponent } from "gatsby"

// Components
import IconComponent from "./icons/icon"

// Styles
import * as textStyles from "../styles/textStyles"
import { dark } from "../styles/colors"
import mediaQueries from "../styles/mediaQueries"

// Types
import { INavLinkItem } from "../types/entities"

// Mock data
const NAV_ITEMS: INavLinkItem[] = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/team",
    label: "Team",
  },
  {
    url: "/hypotheken",
    label: "Hypotheken",
  },
  {
    url: "/verzekeren",
    label: "Verzekeren",
  },
  {
    url: "/contact",
    label: "Contact",
  },
]

interface IProps {
  subtle?: boolean
}

const NavLinks: React.FC<IProps> = ({ subtle }) => (
  <List subtle={subtle}>
    {NAV_ITEMS.map(item => (
      <ListItem key={`nav-item-${item.label}`}>
        <Link to={item.url} activeClassName="active">
          <Label>{item.label}</Label>
        </Link>
      </ListItem>
    ))}
    <ListItem>
      <External href={`https://jungleminds.com`} rel="noopener noreferrer">
        <Label>Login</Label>
        <Icon icon="external" width={24} height={24} />
      </External>
    </ListItem>
  </List>
)

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
  margin-bottom: 24px;

  &:nth-last-child(2) {
    margin-bottom: 22px;
  }

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 0;

    &:nth-last-child(2) {
      margin-bottom: 0;
    }
  `}
`

const Link = styled(LinkComponent)`
  position: relative;
  text-decoration: none;

  &.active {
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      background: ${dark};
    }
  }

  ${mediaQueries.from.breakpoint.XL`

    ::after {
      content: "";
      width: 0%;
      height: 2px;
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      background: ${dark};
      transition: width 0.2s ease;
    }

    &:hover {
      ::after {
        width: 100%;
      }
    }

    &.active {
      ::after {
        top: calc(100% + 6px);
      }
    }
  `}
`

const External = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const Label = styled.span``

const Icon = styled(IconComponent)`
  margin-left: 8px;
`
