import React from 'react'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import AppBar from '../components/AppBar'
import '../styles/base.css'

const BaseLayout = ({ children }) => {
  const [engine, setEngine] = React.useState(null);

  React.useEffect(() => {
    // Load the `styletron-engine-atomic` package dynamically.
    // Reason: It requires use of `document`, which is not available
    // outside the browser, so we need to wait until it successfully loads.
    // Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
    import('styletron-engine-atomic').then(styletron => {
      const clientEngine = new styletron.Client();
      setEngine(clientEngine);
    });
  }, []);

  if (!engine) return null;

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <main>
          {/* <AppBar /> */}
            { children }
        </main>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default BaseLayout
