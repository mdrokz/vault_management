import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`textColor.lime-dark`,
    background: theme`backgroundColor.white`,
    color: theme`textColor.dark-grey`,
    fontFamily: theme`fontFamily.sans`,
    margin: 0,
    padding: 0,
    ...tw`antialiased`,
  },
  a: {
    textDecoration: 'none',
    color: theme`textColor.lime-light`,
  }
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles