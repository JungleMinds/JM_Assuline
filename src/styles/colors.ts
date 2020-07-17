interface IColorChannels {
  red: number
  green: number
  blue: number
}
interface IColorOptions {
  channels: IColorChannels
  rgb: string
  hex: string
}
export interface IColor {
  [key: string]: IColorOptions
}

const colors: IColor = {
  // Primary
  dark: {
    channels: {
      red: 40,
      green: 38,
      blue: 35,
    },
    rgb: 'rgb(40,38,35)',
    hex: '#282623',
  },
  darkest: {
    channels: {
      red: 0,
      green: 0,
      blue: 0,
    },
    rgb: 'rgb(0,0,0)',
    hex: '#000',
  },
  yellow: {
    channels: {
      red: 255,
      green: 182,
      blue: 0,
    },
    rgb: 'rgb(255,182,0)',
    hex: '#FFB600',
  },
  yellowDark: {
    channels: {
      red: 255,
      green: 166,
      blue: 0,
    },
    rgb: 'rgb(255,166,0)',
    hex: '#FFA600',
  },
  white: {
    channels: {
      red: 255,
      green: 255,
      blue: 255,
    },
    rgb: 'rgb(255,255,255)',
    hex: '#FFF',
  },
  // Secondary
  green: {
    channels: {
      red: 4,
      green: 117,
      blue: 111,
    },
    rgb: 'rgb(4,117,111)',
    hex: '#04756F',
  },
  greenDark: {
    channels: {
      red: 3,
      green: 105,
      blue: 100,
    },
    rgb: 'rgb(3,105,100)',
    hex: '#036964',
  },
  lightGrey: {
    channels: {
      red: 242,
      green: 239,
      blue: 230,
    },
    rgb: 'rgb(242,239,230)',
    hex: '#F2EFE6',
  },
}

export const dark = colors.dark.rgb
export const darkest = colors.darkest.rgb
export const yellow = colors.yellow.rgb
export const yellowDark = colors.yellowDark.rgb
export const white = colors.white.rgb
export const green = colors.green.rgb
export const greenDark = colors.greenDark.rgb
export const lightGrey = colors.lightGrey.rgb

export default colors
