import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import AccordionComponent from './accordion'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
import { IAccordionItem } from '../types/entities'

interface IProps {
  data: IAccordionItem[]
}

type AccordionColumns = IAccordionItem[][]

const Accordions: React.FC<IProps> = ({ data }) => {
  const [sortedAccordions, setSortedAccordions] = useState<IAccordionItem[]>([])
  const [accordionsColumns, setAccordionsColumns] = useState<AccordionColumns>(
    []
  )

  useEffect(() => {
    const accordionsContent = [...data]
    const sortedData = accordionsContent.sort((a, b) =>
      a.title > b.title ? 1 : -1
    )

    sortedData.length > 5
      ? setAccordionsColumns([
          [...sortedData].slice(0, Math.ceil(sortedData.length / 2)),
          [...sortedData].slice(Math.ceil(sortedData.length / 2)),
        ])
      : setSortedAccordions(sortedData)
  }, [data])

  return (
    <Container>
      {accordionsColumns.length > 0 ? (
        accordionsColumns.map((accordions, index) => (
          <Wrapper key={`accordions-wrapper-${index}`} count={data.length}>
            {accordions.map(
              (accordion: { title: string; paragraph: string }) => (
                <Accordion
                  key={`accordion-item-${accordion.title}`}
                  {...accordion}
                />
              )
            )}
          </Wrapper>
        ))
      ) : (
        <Wrapper count={data.length}>
          {sortedAccordions.map(accordion => (
            <Accordion
              key={`accordion-item-${accordion.title}`}
              {...accordion}
            />
          ))}
        </Wrapper>
      )}
    </Container>
  )
}

export default Accordions

const Container = styled(ContainerComponent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 44px;
  margin-bottom: 40px;
  ${textStyles.highlight}

  ${mediaQueries.from.breakpoint.M`
    padding: 0 24px;
  `}

  ${mediaQueries.from.breakpoint.L`
    flex-direction: row;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 20px;
  `}
`

const Accordion = styled(AccordionComponent)``

const Wrapper = styled.ul<{ count: number }>`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  > ${Accordion} {
    margin-bottom: ${props => (props.count > 5 ? 8 : 16)}px;
  }

  ${mediaQueries.from.breakpoint.L`
    :first-of-type {
      margin-right: 40px;
    }

    > ${Accordion} {
      margin-bottom: ${(props: { count: number }) => props.count > 5 && 16}px;
    }
  `}
`
