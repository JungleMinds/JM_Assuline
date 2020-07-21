import React from 'react'
import styled from 'styled-components'

// Components
import Services from '../components/services'
import Carousel from '../components/carousel'
import ImageBanner from '../components/imageBanner'
import Reviews from '../components/reviews'

interface IProps {
  items: any
}

const Body: React.FC<IProps> = ({ items }) => {
  const componentMap: any = {
    services: Services,
    carousel: Carousel,
    imageBanner: ImageBanner,
    reviews: Reviews,
  }

  return (
    <>
      {items &&
        items.map((item: any) => {
          if (item !== undefined) {
            const Component: React.FC = item && componentMap[item.type]
            if (Component) {
              return <Component key={`body-item-${item.type}`} {...item} />
            } else {
              return (
                <UnknownComponent key={`body-item-${item.type}`}>
                  UNKNOWN COMPONENT: {item.type}
                </UnknownComponent>
              )
            }
          } else {
            return null
          }
        })}
    </>
  )
}

export default Body

const UnknownComponent = styled.div`
  color: red;
`
