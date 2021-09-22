import { createTheme } from 'baseui'

const primitives = {
  primaryFontFamily: 'Work Sans',
  accent: '#00adee',
  accent100: '#0980ad',
  accent200: '#646877',
  accent300: '#38393b',
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
