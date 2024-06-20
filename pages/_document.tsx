import Document, { Html, Head, NextScript, Main, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function MyDocument() {
  return (
    <Html lang='ko'>
      <Head />
      <body className='123'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext,): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet()

  const originRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () => originRenderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
    })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement}
        </>
      )
    }
  } finally {
    sheet.seal()
  }

}