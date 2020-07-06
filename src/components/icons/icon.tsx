import React from "react"

// Components
import Arrow from "./arrow"
import Logo from "./logo"
import Menu from "./menu"
import External from "./external"

// Styles
import { dark } from "../../styles/colors"

// Types
export interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
  isOpen?: boolean
  inverse?: boolean
  payoff?: boolean
  isScrolled?: boolean
}

type IProps = IIconProps & {
  icon: keyof typeof iconMap
}

const iconMap = {
  arrow: Arrow,
  logo: Logo,
  menu: Menu,
  external: External,
}

const Icon = ({
  icon,
  width = 24,
  height = 24,
  color = dark,
  className,
  isOpen,
  inverse,
  payoff,
  isScrolled,
}: IProps) => {
  const IconComponent: React.FC<IIconProps> = iconMap[icon]
  return (
    <IconComponent
      width={width}
      height={height}
      color={color}
      className={className}
      isOpen={isOpen}
      inverse={inverse}
      payoff={payoff}
      isScrolled={isScrolled}
    />
  )
}

export default Icon
