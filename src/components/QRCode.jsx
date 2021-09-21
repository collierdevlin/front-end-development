import * as React from 'react'
import { DisplayMedium } from 'baseui/typography'
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
          maxWidth: '400px'
        })
      } src={qrCode} alt="qr-code" />
      <DisplayMedium className={css({ fontWeight: 700, padding: '1em 0' })}>
        https://qrco.de/bc6njj
      </DisplayMedium>
    </Container>
  )
}

export default QRCode
