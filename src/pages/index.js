import * as React from 'react'
import scrollToElement from 'scroll-to-element'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Paragraph2, Paragraph3 } from 'baseui/typography'
import { useStyletron, styled } from 'baseui'
import BaseLayout from '../layout/base'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../components/Section'
import 'aos/dist/aos.css'
import baseWebLogo from '../assets/baseweblogo.svg'
import githubLogo from '../assets/github-logo.png'
import graphCmsLogo from '../assets/graphcms-logo.svg'
import netlifyLogo from '../assets/netlify-logo.png'
import gatsbyLogo from '../assets/gatsby-logo.png'
import reactLogo from '../assets/react-logo.png'
import qrCode from '../assets/qr-code.png'

const scrollTo = (elClass) => {
  scrollToElement(elClass, {
    offset: 0,
    duration: 500
  })
}

const Container = styled('div', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '1rem',
})

const Footer = () => {
  const [css] = useStyletron()
  return (
    <div id="footer" className={
      css({
        textAlign: 'center',
        margin: '25px auto 10px auto'
      })
    }>
      <Paragraph3 className={css({ marginTop: '5rem', opacity: '0.6' })}>
        Made with
      </Paragraph3>
      <a href="https://baseweb.design/" target="__blank">
        <img className={
            css({
              width: '100%',
              height: 'auto',
              maxWidth: '85px',
              opacity: '0.6',
              ':hover': { opacity: '0.9', cursor: 'pointer' }
            })
          } src={baseWebLogo} alt="base-web-logo" />
      </a>
      
      <Paragraph2 className={css({ margin: '45px 0 25px 0' })} color="#86A0A8">
        Created by Collier Devlin &copy; {(new Date()).getFullYear()}
      </Paragraph2>
    </div>
  )
}

const QRCode = () => {
  const [css] = useStyletron()

  return (
    <Container className={css({ textAlign: 'center', padding: '2em 0' })}>
      <img className={
        css({
          width: '100%',
          height: 'auto',
          maxWidth: '500px'
        })
      } src={qrCode} alt="qr-code" />
    </Container>
  )
}

const Plugins = () => {
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
      padding: '4em 0'
    })}
    >
      <FlexGrid
        flexGridColumnCount={3}
        flexGridColumnGap="scale1000"
        flexGridRowGap="scale1000"
      >
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://reactjs.org/" target="_blank">
            <img className={css(imageStyle)} src={reactLogo} alt="react-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://www.gatsbyjs.com/" target="_blank">
            <img className={css(imageStyle)} src={gatsbyLogo} alt="gatsby-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://github.com/" target="_blank">
            <img className={css(imageStyle)} src={githubLogo} alt="github-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://graphcms.com/" target="_blank">
            <img className={css(imageStyle)} src={graphCmsLogo} alt="graphcms-logo" />
          </a>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <a className={css(linkStyle)} href="https://www.netlify.com/" target="_blank">
            <img className={css(imageStyle)} src={netlifyLogo} alt="netlify-logo" />
          </a>
        </FlexGridItem>
      </FlexGrid>
    </Container>
  )
}

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      graphCmsData {
        sections {
          id
          title
          content
          style
        }
      }
    }
  `)

  const sections = query.graphCmsData.sections
  
  return (
    <BaseLayout>
      { sections.map((section, index) => (
        <Section className={`section-${index}`}
          scrollToNext={() => scrollTo(sections.length - 1 === index ? '#footer' : `.section-${index + 1}`)}
          {...section}
          index={index}
          key={section.id}
        />
      ))}
      <QRCode />
      <Plugins />
      <Footer />
    </BaseLayout>
  )
}

export default IndexPage
