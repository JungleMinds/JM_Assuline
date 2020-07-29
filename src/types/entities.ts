export interface IBaseIcon {
  width?: number
  height?: number
  className?: string
  color?: string
}

export interface IBasePictogram {
  color?: string
  className?: string
}

export interface INavLinkItem {
  url: string
  label: string
}

export interface IButton {
  label: string
  url: string
}

export interface IImage {
  src: string
  alt: string
}

export interface IStaticFile {
  url: string
  label: string
}

export interface IReview {
  image: IImage
  text: string
  author: string
  location: string
}

export interface IReviews {
  reviews: IReview[]
  grade: {
    active: boolean
    score: number
    text: string
  }
}

// HEADER
export type HeaderTypes =
  | 'Home'
  | 'Hypotheken'
  | 'Verzekeren'
  | 'Team'
  | 'Contact'

// SERVICES
export interface IService {
  title: string
  paragraph: string
  buttonLabel: string
  buttonUrl: string
  image: string
  type: ServiceTypes
}

export type ServiceTypes = 'Hypotheken' | 'Verzekeren'

// ACCORDIONS
export interface IAccordionItem {
  title: string
  paragraph: string
}

// HOW WE WORK
export interface IBaseIllustration {
  className?: string
}

export type IllustrationTypes = 'orientation' | 'advisor' | 'completion'
