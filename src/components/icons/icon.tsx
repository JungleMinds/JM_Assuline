import React from "react"

// Components
import Arrow from "./arrow"

// Styles
import { dark } from "../../styles/colors"

// Types
export interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

type IProps = IIconProps & {
  icon: keyof typeof iconMap
}

const iconMap = {
  arrow: Arrow,
}

const Icon = ({
  icon,
  width = 24,
  height = 24,
  color = dark,
  className,
}: IProps) => {
  const IconComponent: React.FC<IIconProps> = iconMap[icon]
  return (
    <IconComponent
      width={width}
      height={height}
      color={color}
      className={className}
    />
  )
}

export default Icon
