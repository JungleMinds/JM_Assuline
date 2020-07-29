import React from 'react'

// Components
import BusinessConsumerPictogram from './businessConsumerPictogram'
import BannerPictogram from './bannerPictogram'

// Types
import { IBasePictogram as IPictogramProps } from '../../types/entities'

type IProps = IPictogramProps & {
  pictogram: keyof typeof pictogramMap
}

const pictogramMap = {
  'business-consumer': BusinessConsumerPictogram,
  banner: BannerPictogram,
}

const Pictogram = ({ pictogram, color, className }: IProps) => {
  const IllustrationComponent: React.FC<IPictogramProps> =
    pictogramMap[pictogram]
  return <IllustrationComponent color={color} className={className} />
}

export default Pictogram
