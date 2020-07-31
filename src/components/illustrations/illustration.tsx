import React from 'react'

// Components
import Orientation from './orientation'
import Advisor from './advisor'
import Completion from './completion'

// Types
import { IBaseIllustration as IIllustrationProps } from '../../types/entities'

type IProps = IIllustrationProps & {
  illustration: keyof typeof illustrationMap
}

const illustrationMap = {
  orientation: Orientation,
  advisor: Advisor,
  completion: Completion,
}

const Illustration = ({ illustration, className }: IProps) => {
  const IllustrationComponent: React.FC<IIllustrationProps> =
    illustrationMap[illustration]
  return <IllustrationComponent className={className} />
}

export default Illustration
