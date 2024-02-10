import Home from "../components/Home/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Molla - Bootstrap eCommerce Template</title>
        <meta name="keywords" content="HTML5 Template" />
        <meta
          name="description"
          content="Molla - Bootstrap eCommerce Template"
        />
        <meta name="author" content="p-themes" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/images/icons/site.html" />
        <link
          rel="mask-icon"
          href="assets/images/icons/safari-pinned-tab.svg"
          color="#666666"
        />
        <link rel="shortcut icon" href="assets/images/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Molla" />
        <meta name="application-name" content="Molla" />
        <meta name="msapplication-TileColor" content="#cc9966" />
        <meta
          name="msapplication-config"
          content="assets/images/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Home />
    </>
  );
}
