import React from 'react'
import styled from 'styled-components'
import { Link as LinkComponent } from 'gatsby'

// Components
import IconComponent from './icons/icon'

// Styles
import * as textStyles from '../styles/textStyles'
import { dark, green } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'

// Types
import { INavLinkItem } from '../types/entities'

interface IProps {
  items: INavLinkItem[]
  subtle?: boolean
}

const NavLinks: React.FC<IProps> = ({ items, subtle }) => (
  <List subtle={subtle}>
    {items.map(item => (
      <ListItem key={`nav-item-${item.label}`}>
        <Link to={item.url} activeClassName="active">
          <Label>{item.label}</Label>
        </Link>
      </ListItem>
    ))}
    <ListItem>
      <External
        href={`https://jungleminds.com`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Label>Login</Label>
        <Icon icon="external" width={24} height={24} />
      </External>
    </ListItem>
  </List>
)

export default NavLinks

const List = styled.ul<{ subtle?: boolean }>`
  ${({ subtle }) =>
    subtle ? textStyles.highlightSubtle : textStyles.highlight}
  list-style: none;
  margin: 0;
  padding-left: 16px;
  transition: font-size 0.2s ease;

  ${mediaQueries.from.breakpoint.L`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding-left: 0;
  `}
`

const ListItem = styled.li<{ subtle?: boolean }>`
  margin-bottom: 24px;

  &:nth-last-child(2) {
    margin-bottom: 22px;
  }

  ${mediaQueries.from.breakpoint.L`
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
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      background: ${dark};
    }
  }

  ${mediaQueries.from.breakpoint.L`

    ::after {
      content: "";
      width: 0%;
      height: 2px;
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      background: ${dark};
      transition: width 0.2s ease;
    }

    &:hover {
      color: ${green};
      ::after {
        width: 100%;
        background: ${green};
      }

      &.active {
        color: ${dark};

        ::after {
          background: ${dark};
        }
      }
    }
  `}

  ${mediaQueries.from.breakpoint.XL`
    ::after {
      top: calc(100% + 6px);
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
