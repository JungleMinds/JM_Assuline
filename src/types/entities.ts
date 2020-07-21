export interface IBaseIcon {
  width?: number
  height?: number
  className?: string
  color?: string
}

export interface INavLinkItem {
  url: string
  label: string
}

export interface IButton {
  label: string
  url: string
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
