import React from 'react'

// Components
import Arrow from './arrow'
import Logo from './logo'
import Menu from './menu'
import External from './external'
import Phone from './phone'
import Mail from './mail'
import Location from './location'
import Lines from './lines'
import Check from './check'
import Indicator from './indicator'
import Chevron from './chevron'
import ImageOverlay from './imageOverlay'
import Pictogram from './pictogram'
import Download from './download'
import User from './user'
import ErrorIcon from './error'

// Styles
import { dark } from '../../styles/colors'

// Types
import { IBaseIcon } from '../../types/entities'
export interface IIconProps extends IBaseIcon {
  isOpen?: boolean
  inverse?: boolean
  payoff?: boolean
  isScrolled?: boolean
  footer?: boolean
  large?: boolean
}

type IProps = IIconProps & {
  icon: keyof typeof iconMap
}

export const iconMap = {
  arrow: Arrow,
  logo: Logo,
  menu: Menu,
  external: External,
  phone: Phone,
  location: Location,
  mail: Mail,
  lines: Lines,
  check: Check,
  indicator: Indicator,
  chevron: Chevron,
  overlay: ImageOverlay,
  pictogram: Pictogram,
  download: Download,
  user: User,
  error: ErrorIcon,
}

const Icon = ({
  icon,
  width = 24,
  height = 24,
  color = dark,
  className,
  ...rest
}: IProps) => {
  const IconComponent: React.FC<IIconProps> = iconMap[icon]
  return (
    <IconComponent
      width={width}
      height={height}
      color={color}
      className={className}
      {...rest}
    />
  )
}

export default Icon
