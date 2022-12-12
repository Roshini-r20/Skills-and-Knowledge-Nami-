import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/nprogress.css" />
          <link rel="stylesheet" href="/static/styles.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
