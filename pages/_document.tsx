import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="HyperTraining - Profesjonalny trening personalny w Warszawie z Patrykiem Dębowskim. Osiągnij swoje cele fitness z doświadczonym trenerem." />
        <meta name="keywords" content="trening personalny, personal trainer, fitness, siłownia, warszawa, patryk dębowski" />
        <meta name="author" content="Patryk Dębowski" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HyperTraining - Patryk Dębowski" />
        <meta property="og:description" content="Profesjonalny trening personalny w Warszawie" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}