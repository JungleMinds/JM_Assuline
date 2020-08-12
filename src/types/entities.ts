import { iconMap } from '../components/icons/icon'

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
  image: string
  text: any
  name: string
  location: string
}

export interface IReviews {
  items: IReview[]
  grade: {
    visible: boolean
    score: number
    text: any
  }
}

export interface ICrossLink {
  title: string
  button: IButton
  className?: string
}

// HEADER
export type HeaderTypes =
  | 'Home'
  | 'Hypotheken'
  | 'Verzekeren'
  | 'Team'
  | 'Contact'
  | 'Content'

// SERVICES
export interface IService {
  title: string
  paragraph: any
  button: IButton
  image: string
  type: ServiceTypes
}

export type ServiceTypes = 'Hypotheken' | 'Verzekeren'

// ACCORDIONS
export interface IAccordionItem {
  title: string
  paragraph: any
}

// HOW WE WORK
export interface IBaseIllustration {
  className?: string
}

export type IllustrationTypes = 'orientation' | 'advisor' | 'completion'

// TEAM
export interface ITeamMember {
  image: string
  name: string
  phone: string
  email: string
}

// CONTACT FORM
export interface IInputProps {
  icon: keyof typeof iconMap
  placeholder: string
  type?: string
  name: string
  onChange?: any
  onBlur?: any
  value?: string
  hasError?: undefined | boolean
  touched?: boolean
}

export type IContactForm = {
  [key in FieldName]: string
}

export type FieldName = 'name' | 'email' | 'phone'

// ANIMATIONS
export type Iteration = 'forwards' | 'infinite'

// TOAST BAR
export interface IToastBar {
  message: string
  link: IToastBarLink
  visible: boolean
}

export interface IToastBarLink {
  label: string
  url: string
}
