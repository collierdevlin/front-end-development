import * as React from 'react'
import { Paragraph2, Paragraph3 } from 'baseui/typography'
import { useStyletron } from 'baseui'

import baseWebLogo from '../assets/baseweblogo.svg'

export const Footer = () => {
  const [css] = useStyletron()
  return (
    <div id="footer" className={
      css({
        textAlign: 'center',
        margin: '25px auto 10px auto',
        maxWidth: 300
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

export default Footer
