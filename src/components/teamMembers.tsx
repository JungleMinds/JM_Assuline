import React from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import TeamCard from './teamCard'

// Styles
import mediaQueries from '../styles/mediaQueries'

// Types
import { ITeamMember } from '../types/entities'

interface IProps {
  data: ITeamMember[]
}

const TeamMembers: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      {data.map(teamMember => (
        <Card key={`team-member-${teamMember.name}`} {...teamMember} />
      ))}
    </Container>
  )
}

export default TeamMembers

const Container = styled(ContainerComponent)`
  margin: 0 24px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin: 0 auto;
    padding: 0 20px;
  `}
`

const Card = styled(TeamCard)`
  &:last-of-type {
    align-self: flex-start;
  }
`
