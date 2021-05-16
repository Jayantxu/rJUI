import React from 'react';
// #_document&_app: https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components'


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // getInitialProps #https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
    const initialProps = await Document.getInitialProps(ctx);

    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      
    );
  }
}
export default MyDocument;


