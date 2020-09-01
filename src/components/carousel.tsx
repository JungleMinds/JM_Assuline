import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SliderComponent from 'react-slick'

// Components
import IconComponent from './icons/icon'
import RichText from './richText'

// Styles
import 'slick-carousel/slick/slick.css'
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import mediaQueries from '../styles/mediaQueries'
import * as textStyles from '../styles/textStyles'
import { yellow, green } from '../styles/colors'

// Types
interface IProps {
  images: string[]
  heading?: any
}

const Carousel: React.FC<IProps> = ({ images, heading }) => {
  const [autoplay, setAutoplay] = useState<boolean>(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  let observer: IntersectionObserver

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      !('IntersectionObserverEntry' in window)
    ) {
      return setAutoplay(true)
    }

    observer = new IntersectionObserver(handleIntersection, observerOptions)

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleIntersection: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    if (entries[0].isIntersecting) {
      setAutoplay(true)
    } else {
      setAutoplay(false)
    }
  }

  const getCurrentSlideIndex = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex)
  }

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    customPaging: () => (
      <Indicator>
        <Icon icon="indicator" width={24} height={24} />
      </Indicator>
    ),
    afterChange: getCurrentSlideIndex,
  }

  return (
    <Container ref={sliderRef}>
      <Slider
        size={images.length}
        key={`autoplay: ${autoplay}`}
        {...sliderSettings}
        autoplay={autoplay}
        initialSlide={currentSlideIndex}
      >
        {images.map((image, index) => (
          <div key={`carousel-image-${index}`}>
            <ImageContainer>
              <Image background={image} />
            </ImageContainer>
          </div>
        ))}
      </Slider>
      <Heading>
        <RichText content={heading.raw} />
      </Heading>
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

const Container = styled.div`
  max-width: 1264px;
  padding: 0 44px;
  margin: 0 auto 64px;

  ${mediaQueries.from.breakpoint.M`
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ${Slider} {
      width: calc(50% - 16px);
    }
  `}

  ${mediaQueries.from.breakpoint.L`
    margin-bottom: 80px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 20px;
    margin-bottom: 160px;

    > ${Slider} {
      width: calc(50% - 12px);
    }
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(288, 219)}
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

  ${mediaQueries.from.breakpoint.M`
    width: calc(50% - 16px);
  `}

  ${mediaQueries.from.breakpoint.XL`
    width: calc(50% - 116px);
  `}
`
