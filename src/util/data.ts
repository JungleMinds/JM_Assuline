export const normalizeData = ({ data }: any) => {
  const header = getHeaderData(data)
  const body = data.body && getBodyData(data.body)

  return {
    header: {
      title: header.title,
      intro: header.intro,
      image: header.image,
      buttons: header.buttons,
      usps: header.usps,
    },
    body,
  }
}

const getHeaderData = (data: any) => {
  let primaryButton: any = null
  let secondaryButton: any = null
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
        case 'header_usps':
          obj.usps = data[key].raw.map((item: any) => item.text)
          break
        case 'header_buttonlink':
          primaryButton = { ...primaryButton, url: linkResolver(data[key]) }
          break
        case 'header_buttonlabel':
          primaryButton = { ...primaryButton, label: data[key] }
          break
        case 'header_secondary_buttonlink':
          secondaryButton = { ...secondaryButton, url: linkResolver(data[key]) }
          break
        case 'header_secondary_buttonlabel':
          secondaryButton = { ...secondaryButton, label: data[key] }
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
    intro: headerObj.intro || undefined,
    usps: headerObj.usps || undefined,
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
  if (component.__typename.endsWith('ContactForm')) {
    return handleContactFormData(component)
  }
  if (component.__typename.endsWith('Intro')) {
    return handleIntroData(component)
  }
  if (component.__typename.endsWith('ForWho')) {
    return handleForWhoData(component)
  }
  if (component.__typename.endsWith('Image')) {
    return handleImageData(component)
  }
  if (component.__typename.endsWith('HowWeWork')) {
    return handleHowWeWorkData(component)
  }
  if (component.__typename.endsWith('Accordions')) {
    return handleAccordionsData(component)
  }
  if (component.__typename.endsWith('CallToActionBanner')) {
    return handleCallToActionBannerData(component)
  }
  if (component.__typename.endsWith('ServicesToggle')) {
    return handleToggleData(component)
  }
  if (component.__typename.endsWith('Crosslinks')) {
    return handleCrosslinksData(component)
  }
  if (component.__typename.endsWith('Team')) {
    return handleTeamData(component)
  }
  if (component.__typename.endsWith('Location')) {
    return handleLocationData(component)
  }
  if (component.__typename.endsWith('ContentBlock')) {
    return handleContentBlockData(component)
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
    button:
      item.service_buttonlink && item.service_buttonlink.url !== ''
        ? {
            label: item.service_buttonlabel.text,
            url: linkResolver(item.service_buttonlink),
          }
        : undefined,
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
  button:
    data.primary.imagebanner_buttonlink &&
    data.primary.imagebanner_buttonlink.url !== ''
      ? {
          label: data.primary.imagebanner_buttonlabel.text,
          url: linkResolver(data.primary.imagebanner_buttonlink),
        }
      : undefined,
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
// Components: Contact Form
const handleContactFormData = (data: any) => ({
  type: 'contactForm',
  visible: data.primary.form_visible,
  title: data.primary.form_title.text,
  label: data.primary.form_buttonlabel,
})
// Components: Intro
const handleIntroData = (data: any) => ({
  type: 'intro',
  paragraph: data.primary.intro_text,
})
// Components: For Who
const handleForWhoData = (data: any) => ({
  type: 'forWho',
  business: {
    title: data.primary.forwho_business_title.text,
    paragraph: data.primary.forwho_business_description,
  },
  consumer: {
    title: data.primary.forwho_consumer_title.text,
    paragraph: data.primary.forwho_consumer_description,
  },
})
// Components: Image
const handleImageData = (data: any) => ({
  type: 'image',
  image: data.primary.image_image.url,
})
// Components: How We Work
const handleHowWeWorkData = (data: any) => ({
  type: 'howWeWork',
  heading: data.primary.how_we_work_title.text,
  steps: data.items.map((item: any, index: number) => ({
    illustration: item.how_we_work_step_category,
    title: `${index + 1}. ${item.how_we_work_step_title.text}`,
    paragraph: item.how_we_work_step_content,
  })),
  button:
    data.primary.how_we_work_button_link &&
    data.primary.how_we_work_button_link !== ''
      ? {
          label: data.primary.how_we_work_button_label,
          url: linkResolver(data.primary.how_we_work_button_link),
        }
      : undefined,
})
// Component: Accordions
const handleAccordionsData = (data: any) => ({
  type: 'accordions',
  items: data.items.map((item: any) => ({
    title: item.accordion_title.text,
    paragraph: item.accordion_content,
  })),
})
// Component: Call To Action Banner
const handleCallToActionBannerData = (data: any) => ({
  type: 'callToActionBanner',
  heading: data.primary.banner_title.text,
  button:
    data.primary.banner_button_link &&
    data.primary.banner_button_link.url !== ''
      ? {
          label: data.primary.banner_button_label,
          url: linkResolver(data.primary.banner_button_link),
        }
      : undefined,
  asset:
    data.primary.banner_download_link &&
    data.primary.banner_download_link !== ''
      ? {
          label: data.primary.banner_download_label,
          url: linkResolver(data.primary.banner_download_link),
        }
      : undefined,
})
// Component: Toggle
const handleToggleData = (data: any) => ({
  type: 'servicesToggle',
  private: {
    title: data.primary.toggle_private_title.text,
    short: data.primary.toggle_private_title_short,
    text: data.primary.toggle_private_description,
    image: data.primary.toggle_private_image.url,
    accordions: data.items
      .filter((item: any) => item.toggle_item_type === 'Particulier')
      .map((item: any) => ({
        title: item.toggle_item_title.text,
        paragraph: item.toggle_item_description,
      })),
  },
  business: {
    title: data.primary.toggle_business_title.text,
    short: data.primary.toggle_business_title_short,
    text: data.primary.toggle_business_description,
    image: data.primary.toggle_business_image.url,
    accordions: data.items
      .filter((item: any) => item.toggle_item_type === 'Zakelijk')
      .map((item: any) => ({
        title: item.toggle_item_title.text,
        paragraph: item.toggle_item_description,
      })),
  },
})
// Component: Crosslinks
const handleCrosslinksData = (data: any) => ({
  type: 'crossLinks',
  review: data.primary.crosslink_review_visible
    ? {
        score: data.primary.crosslink_review_score.text,
        title: data.primary.crosslink_review_title.text,
        button: {
          label: data.primary.crosslink_review_button_label,
          url: linkResolver(data.primary.crosslink_review_link),
        },
      }
    : undefined,
  crossLinks: data.items.map((item: any) => ({
    title: item.crosslink_item_title.text,
    image: item.crosslink_item_image.url,
    button: {
      label: item.crosslink_item_button_label,
      url: linkResolver(item.crosslink_item_link),
    },
  })),
})
// Components: Team
const handleTeamData = (data: any) => ({
  type: 'team',
  data: data.items.map((item: any) => ({
    name: item.team_item_name.text,
    phone: item.team_item_phone || undefined,
    email: item.team_item_email,
    image: item.team_item_image.url,
  })),
})
// Components: Location
const handleLocationData = (data: any) => ({
  type: 'location',
  companyName: data.primary.location_company_name,
  address: {
    street: data.primary.location_address_street,
    postalCodeAndCity: `${data.primary.location_address_postalcode} ${data.primary.location_address_city}`,
    postbox: `Postbus ${data.primary.location_postbox_number}`,
    postboxCodeAndCity: `${data.primary.location_postbox_code} ${data.primary.location_postbox_city}`,
  },
  phone: data.primary.location_phone,
  email: data.primary.location_email,
  image: data.primary.location_image.url,
})
// Components: ContentBlock
const handleContentBlockData = (data: any) => ({
  type: 'contentBlock',
  title: data.primary.content_block_title.text,
  content: data.primary.content_block_content,
  button:
    data.primary.content_block_button_link.url !== ''
      ? {
          label: data.primary.content_block_button_label,
          url: linkResolver(data.primary.content_block_button_link),
        }
      : undefined,
})

// Links
export const linkResolver = (link: any) => {
  const INFO_PAGE_PATH = `/informatie`
  if (link.uid) {
    // Internal links
    if (link.type === 'content_page') {
      return `${INFO_PAGE_PATH}/${link.uid}/`
    } else if (link.type === 'home_page') {
      return `/`
    } else {
      return `/${link.uid}/`
    }
  } else {
    // External links
    return `${link.url}`
  }
}

// Navigation
export const normalizeNavData = (data: any) => {
  const nav = Object.keys(data)
    .filter((key: string) => key.startsWith('prismic'))
    .map((key: string) => ({
      label: data[key].uid.charAt(0).toUpperCase() + data[key].uid.slice(1),
      url: linkResolver({
        uid: data[key].uid,
        type: data[key].type,
        url: data[key].url,
      }),
    }))

  const addressData = data.prismicContactPage.data.body.filter((item: any) =>
    item.__typename.endsWith('Location')
  )[0]
  const phone = addressData.primary.location_phone

  const toasterData = data.allPrismicContentPage.edges[0]
  const toaster = toasterData
    ? {
        message: toasterData.node.data.toaster_title,
        link: {
          url: linkResolver({
            uid: toasterData.node.uid,
            type: toasterData.node.type,
            url: toasterData.node.url,
          }),
          label: toasterData.node.data.toaster_link_label,
        },
      }
    : undefined

  return {
    nav,
    phone,
    toaster,
  }
}

// Footer
export const normalizeFooterData = (data: any) => {
  const links = data.allPrismicContentPage.edges.map((item: any) => ({
    label: item.node.data.page_title.text,
    url: linkResolver({
      uid: item.node.uid,
      type: item.node.type,
      url: item.node.url,
    }),
  }))

  const addressData = data.prismicContactPage.data.body.filter((item: any) =>
    item.__typename.endsWith('Location')
  )[0]
  const address = {
    phone: addressData.primary.location_phone,
    email: addressData.primary.location_email,
    location: `${addressData.primary.location_address_street}, ${addressData.primary.location_address_postalcode} ${addressData.primary.location_address_city}`,
  }

  const nav = Object.keys(data)
    .filter((key: string) => key.startsWith('prismic'))
    .map((key: string) => ({
      label: data[key].uid.charAt(0).toUpperCase() + data[key].uid.slice(1),
      url: linkResolver({
        uid: data[key].uid,
        type: data[key].type,
        url: data[key].url,
      }),
    }))

  return {
    nav,
    address,
    links,
  }
}
