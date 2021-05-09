// #_document&_app: https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // getInitialProps #https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
    const initialProps = await Document.getInitialProps(ctx);
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


