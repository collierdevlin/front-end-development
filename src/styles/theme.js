import { createTheme } from 'baseui'

const primitives = {
  primaryFontFamily: 'Work Sans',
  accent: '#ffc000',
  accent100: '#ffda00',
  accent200: '#646877',
  accent300: '#1d2542'
}

const overrides = {
  colors: {
    buttonPrimaryFill: primitives.accent,
    buttonPrimaryHover: primitives.accent100,
    buttonMinimalHover: primitives.accent100,
    buttonDisabledFill: primitives.accent200
  }
}

const theme = createTheme(primitives, overrides)

export default theme
