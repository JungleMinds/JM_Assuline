import React from 'react'
import styled from 'styled-components'
import SliderComponent from 'react-slick'

// Components
import ContainerComponent from './container'
import IconComponent from './icons/icon'

// Styles
import 'slick-carousel/slick/slick.css'
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import mediaQueries from '../styles/mediaQueries'
import * as textStyles from '../styles/textStyles'
import { yellow, green } from '../styles/colors'

// Types
interface IProps {
  images: string[]
  heading?: string
}

const Carousel: React.FC<IProps> = ({ images, heading }) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: () => (
      <Indicator>
        <Icon icon="indicator" width={24} height={24} />
      </Indicator>
    ),
  }

  return (
    <Container>
      <Slider size={images.length} {...sliderSettings}>
        {images.map((image, index) => (
          <ImageContainer key={`carousel-image-${index}`}>
            <Image background={image} />
          </ImageContainer>
        ))}
      </Slider>
      <Heading>{heading}</Heading>
    </Container>
  )
}

export default Carousel

const Indicator = styled.a``

const Icon = styled(IconComponent)`
  cursor: pointer;
  transition: fill 0.2s ease;

  :hover {
    fill: ${green};
  }
`

const Slider = styled(SliderComponent)<{ size: number }>`
  > .slick-list {
    margin-bottom: 32px;
  }

  > ul {
    display: flex !important;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto 16px;
    padding: 0;
    width: ${props => props.size * (24 + 16) - 16}px;

    > li.slick-active {
      margin: 0;
      padding: 0;
      width: 24px;
      height: 24px;

      ${Icon} {
        fill: ${yellow};
      }
    }
  }

  ${mediaQueries.from.breakpoint.L`
    > ul {
      margin: 0 auto;
      line-height: 0;
    }
  `}
`

const Container = styled(ContainerComponent)`
  padding: 0 44px;
  margin-bottom: 64px;

  ${mediaQueries.from.breakpoint.M`
    padding: 0 24px;
    margin-bottom: 80px;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ${Slider} {
      width: calc(50% - 16px);
    }
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 20px;
    margin-bottom: 160px;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(288, 208)}
  margin: 0;
`

const Image = styled.div<{ background?: string }>`
  ${aspectRatioChild}

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const Heading = styled.h2`
  ${textStyles.headingSubtle}
  margin: 0;

  ${mediaQueries.from.breakpoint.L`
    width: calc(50% - 16px);
  `}
`
