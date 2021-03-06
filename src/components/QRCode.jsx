import * as React from 'react'
import { DisplaySmall } from 'baseui/typography'
import { useStyletron } from 'baseui'
import Container from '../components/Container'

import qrCode from '../assets/qr-code.png'

export const QRCode = () => {
  const [css] = useStyletron()

  return (
    <Container id="qrCode" className={css({ textAlign: 'center', padding: '2em' })}>
      <img className={
        css({
          width: '100%',
          height: 'auto',
          maxWidth: '400px',
          boxShadow: '3px 3px 5px rgb(0,0,0,0.3)',
          border: 0,
          borderRadius: '2em'
        })
      } src={qrCode} alt="qr-code" />
      <DisplaySmall className={css({ fontWeight: 700, padding: '1em 0' })}>
        https://sad-wright-127abd.netlify.app/
      </DisplaySmall>
    </Container>
  )
}

export default QRCode
