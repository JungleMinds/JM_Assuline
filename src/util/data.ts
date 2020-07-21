export const normalizeData = ({ data }: any) => {
  const header = getHeaderData(data)
  const body = getBodyData(data.body)

  return {
    header: {
      title: header.title,
      intro: header.intro,
      image: header.image,
      buttons: header.buttons,
    },
    body,
  }
}

const getHeaderData = (data: any) => {
  let primaryButton: any = null
  const secondaryButton: any = null
  const buttons = []

  const headerObj = Object.keys(data)
    .filter(
      (item: string) => item.startsWith('header_') || item === 'page_title'
    )
    .reduce((obj: any, key) => {
      switch (key) {
        case 'page_title':
          obj.title = data[key].text
          break
        case 'header_intro':
          obj.intro = data[key]
          break
        case 'header_buttonlink':
          primaryButton = { ...primaryButton, url: linkResolver(data[key]) }
          break
        case 'header_buttonlabel':
          primaryButton = { ...primaryButton, label: data[key] }
          break
        case 'header_image':
          obj.image = data[key].url
          break
      }
      return obj
    }, {})

  if (primaryButton) {
    buttons.push(primaryButton)
  }
  if (secondaryButton) {
    buttons.push(secondaryButton)
  }

  return {
    title: headerObj.title || '',
    intro: headerObj.intro || '',
    buttons: primaryButton || secondaryButton ? buttons : undefined,
    image: headerObj.image,
  }
}

const getBodyData = (data: any) =>
  data.map((item: any) => generateDataObjectForComponent(item))

// Components
const generateDataObjectForComponent = (component: any) => {
  if (!component) {
    return
  }
  if (component.__typename.endsWith('Services')) {
    return handleServicesData(component)
  }
  if (component.__typename.endsWith('Carousel')) {
    return handleCarouselData(component)
  }
  if (component.__typename.endsWith('ImageBanner')) {
    return handleImageBannerData(component)
  }
  if (component.__typename.endsWith('Reviews')) {
    return handleReviewsData(component)
  }
}

// Components: Services
const handleServicesData = (data: any) => ({
  type: 'services',
  services: data.items.map((item: any) => ({
    type: item.service_name,
    title: item.service_title.text,
    paragraph: item.service_description,
    image: item.service_image.url,
    button: {
      label: item.service_buttonlabel.text,
      url: linkResolver(item.service_buttonlink),
    },
  })),
})
// Components: Carousel
const handleCarouselData = (data: any) => ({
  type: 'carousel',
  heading: data.primary.carousel_text,
  images: data.items.map((item: any) => item.carousel_image.url),
})
// Components: Image Banner
const handleImageBannerData = (data: any) => ({
  type: 'imageBanner',
  title: data.primary.imagebanner_text.text,
  image: data.primary.imagebanner_image.url,
  button: {
    label: data.primary.imagebanner_buttonlabel.text,
    url: linkResolver(data.primary.imagebanner_buttonlink),
  },
})
// Components: Reviews
const handleReviewsData = (data: any) => ({
  type: 'reviews',
  grade: {
    visible: data.primary.review_site_toggle,
    score: data.primary.review_site_score,
    text: data.primary.review_site_text,
  },
  items: data.items.map((item: any) => ({
    text: item.review_text,
    name: item.review_name.text,
    location: item.review_city,
    image: item.review_image.url,
  })),
})

// Links
export const linkResolver = (link: any) => {
  let result = '/'
  if (link.type) {
    // Internal links
    switch (link.type) {
      case 'content_page':
        result = `/${link.slug}`
        break

      case 'home_page':
      default:
        result = `/`
        break
    }
  } else {
    // External links
    result = `${link.url}`
  }

  return result
}
