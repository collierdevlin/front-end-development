import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'
import Container from './Container'
import { H4 } from 'baseui/typography'
import { useStyletron } from 'baseui'
import MarkdownIt from 'markdown-it'
import ScrollButton from './ScrollButton'

const md = MarkdownIt()

const Section = ({
  title,
  content,
  style,
  index,
  scrollToNext
}) => {
  const [css, theme] = useStyletron()

  useEffect(() => {
    AOS.init({
      duration : 500
    })
  }, [])

  return (
    <div className={`section section-${index}`}>
      <div
        className={
          css({
            background: '#f9f1d2',
            color: '#333',
            lineSpacing: '1.5em',
            minHeight: '100vh',
            paddingBottom: '100px',
            ...style
          })
        }
      >
        <Container data-aos={ index % 2 === 0 ? "fade-right" : "fade-left" }>
          <H4 color={ style?.color || '#333' }>{title}</H4>
          <div className={
            css({
              ...theme.typography.DisplayXSmall
            })
          } dangerouslySetInnerHTML={ { __html: md.render(content) } } />
        </Container>
        <Container className={css({ textAlign: 'center' })}>
          <ScrollButton scroll={scrollToNext} />
        </Container>
      </div>
    </div>
  )
}

Section.defaultProps = {
  style: {}
}

Section.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.any,
  style: PropTypes.object,
  scrollToNext: PropTypes.func,
}

export default Section
