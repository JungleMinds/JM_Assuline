import React from "react"

// Components
import Arrow from "./arrow"
import Logo from "./logo"
import Menu from "./menu"
import External from "./external"
import Phone from "./phone"
import Mail from "./mail"
import Location from "./location"

// Styles
import { dark } from "../../styles/colors"

// Types
import { IBaseIcon } from "../../types/entities"
export interface IIconProps extends IBaseIcon {
  isOpen?: boolean
  inverse?: boolean
  payoff?: boolean
  isScrolled?: boolean
  footer?: boolean
}

type IProps = IIconProps & {
  icon: keyof typeof iconMap
}

const iconMap = {
  arrow: Arrow,
  logo: Logo,
  menu: Menu,
  external: External,
  phone: Phone,
  location: Location,
  mail: Mail,
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
