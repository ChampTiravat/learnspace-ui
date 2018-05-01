import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

// Normalize the global style
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Kanit:300,400,500'); 
    @font-face {
      font-family: Kanit;
      src: url('/static/fonts/kanit/kanit-regular.ttf');
    }

    * {
        box-sizing: border-box;
        font-family: kanit;
    }

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        color: #777;
        background-color: #f5f5f5;
    }

    h1,h2,h3,h4,h5,h6 { margin: 0; }

    a {text-decoration: none;}
`

class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
