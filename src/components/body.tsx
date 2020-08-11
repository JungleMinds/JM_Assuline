import React from 'react'
import styled from 'styled-components'

// Components
import Services from './services'
import Carousel from './carousel'
import ImageBanner from './imageBanner'
import Reviews from './reviews'
import ContactForm from './contactForm'
import Intro from './intro'
import BusinessConsumer from './businessConsumer'
import GridImage from './fullGridImage'
import HowWeWork from './howWeWork'
import Accordions from './accordions'
import Banner from './banner'
import Toggle from './toggle'
import CrossLinks from './crossLinks'
import Team from './teamMembers'
import Location from './location'
import ContentBlock from './contentBlock'

interface IProps {
  items: any
}

const Body: React.FC<IProps> = ({ items }) => {
  const componentMap: any = {
    services: Services,
    carousel: Carousel,
    imageBanner: ImageBanner,
    reviews: Reviews,
    contactForm: ContactForm,
    intro: Intro,
    forWho: BusinessConsumer,
    image: GridImage,
    howWeWork: HowWeWork,
    accordions: Accordions,
    callToActionBanner: Banner,
    servicesToggle: Toggle,
    crossLinks: CrossLinks,
    team: Team,
    location: Location,
    contentBlock: ContentBlock,
  }

  return (
    <>
      {items &&
        items.map((item: any, index: number) => {
          if (item !== undefined) {
            const Component: React.FC = item && componentMap[item.type]
            if (Component) {
              return (
                <Component key={`body-item-${index}-${item.type}`} {...item} />
              )
            } else {
              return (
                <UnknownComponent key={`body-item-${index}-${item.type}`}>
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
