import * as React from 'react'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { useStyletron } from 'baseui'
import Container from '../components/Container'

import githubLogo from '../assets/github-logo.png'
import graphCmsLogo from '../assets/graphcms-logo.svg'
import netlifyLogo from '../assets/netlify-logo.png'
import gatsbyLogo from '../assets/gatsby-logo.png'
import reactLogo from '../assets/react-logo.png'

export const Plugins = () => {
  const itemProps = {
    height: 'auto',
    display: 'flex',
    flex: 'wrap',
    flexBasis: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }

  const linkStyle = {
    textAlign: 'center',
    width: '100%'
  }

  const imageStyle = {
    width: '90%',
    maxWidth: '250px'
  }

  const [css] = useStyletron()

  return (
    <Container className={css({
      padding: '2em 0'
    })}
    >
      <FlexGrid
        flexGridColumnCount={3}
        flexGridColumnGap="scale1000"
        flexGridRowGap="scale1000"
      >
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img className={css(imageStyle)} src={reactLogo} alt="react-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            <img className={css({ ...imageStyle, width: '75%' })} src={gatsbyLogo} alt="gatsby-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://github.com/collierdevlin/front-end-development" target="_blank" rel="noreferrer">
            <img className={css({ ...imageStyle, width: '65%' })} src={githubLogo} alt="github-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://graphcms.com/" target="_blank" rel="noreferrer">
            <img className={css(imageStyle)} src={graphCmsLogo} alt="graphcms-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            <img className={css(imageStyle)} src={netlifyLogo} alt="netlify-logo" />
          </a>
        </FlexGridItem>
      </FlexGrid>
    </Container>
  )
}

export default Plugins
