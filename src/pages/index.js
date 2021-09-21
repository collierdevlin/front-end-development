import React, { useState } from 'react'
import scrollToElement from 'scroll-to-element'
import BaseLayout from '../layout/base'
import { graphql, useStaticQuery } from 'gatsby'
import ControlButtons from '../components/ControlButtons'
import Footer from '../components/Footer'
import Plugins from '../components/Plugins'
import QRCode from '../components/QRCode'
import Section from '../components/Section'
import 'aos/dist/aos.css'
import { useStyletron } from 'baseui'
import { H5, Paragraph3 } from 'baseui/typography'

const scrollTo = (elClass) => {
  scrollToElement(elClass, {
    offset: 0,
    duration: 300
  })
}

const IndexPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const scrollNext = () => {
    if (sections.length - 1 === currentIndex) {
      scrollTo('#qrCode')
      setCurrentIndex(currentIndex + 1)
    } else if (sections.length - 1 > currentIndex) {
      scrollTo(`.section-${currentIndex + 1}`)
      setCurrentIndex(currentIndex + 1)
    }
  }

  const scrollPrevious = () => {
    scrollTo(sections.length < currentIndex ? `.section-${sections.length - 1}` : `.section-${currentIndex - 1}`)
    setCurrentIndex(currentIndex - 1)
  }

  const sections = query.graphCmsData.sections
  const [css] = useStyletron()
  
  return (
    <BaseLayout
      style={{ marginBottom: 65 }}
      renderControls={() => (
        <>
          <div className={
            css({
              padding: '0.4em 0',
              position: 'fixed',
              placeItems: 'center',
              display: 'flex',
              width: '100%',
              background: '#1d2542',
              height: '65px',
              bottom: 0,
            })
          }>
            <div className={ css({ justifySelf: 'start', marginLeft: '0.4em' }) }>
              <Paragraph3 color="white" style={{ fontStyle: 'italic' }}>{sections[currentIndex]?.title}</Paragraph3>
            </div>
            <div className={ css({ position: 'absolute', right: 0, justifySelf: 'end', display: 'flex', placeItems: 'center' }) }>
              { currentIndex + 1 <= sections.length && <H5 margin="0 1em" color="white">{`${currentIndex + 1} / ${sections.length}`}</H5> }
              <ControlButtons
                disableNext={currentIndex + 1 > sections.length}
                disablePrevious={currentIndex === 0}
                scrollNext={scrollNext}
                scrollPrevious={scrollPrevious}
              />
            </div>
          </div>
        </>
      )}>
      { sections.map((section, index) => (
        <Section className={`section-${index}`}
          {...section}
          index={index}
          key={section.id}
          onManualView={() => setCurrentIndex(index)}
        />
      ))}
      <QRCode />
      <Plugins />
      <Footer />
    </BaseLayout>
  )
}

export default IndexPage
