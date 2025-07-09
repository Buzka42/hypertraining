import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="HyperTraining - Najlepszy trener personalny Warszawa. Trening personalny dla kobiet i mężczyzn. Redukcja wagi, trening siłowy, plany treningowe. Patryk Dębowski." />
        <meta name="keywords" content="trener personalny Warszawa, trening personalny Warszawa, trener personalny dla kobiet Warszawa, trener personalny online Warszawa, trener fitness Warszawa, trener personalny opinie Warszawa" />
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