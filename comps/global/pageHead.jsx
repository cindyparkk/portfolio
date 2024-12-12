import Head from "next/head";

const PageHead = (props) => {
    const { title } = props;
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | Cindy Park ` : `Cindy Park | Portfolio`}
        </title>
        <link rel="shortcut icon" type="image/x-icon" href="/logo-c.svg"></link>
        {/* <link
          rel="preload"
          href="/fonts/Kiona/Kiona-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Metropolis/Metropolis-Black.oft"
          as="font"
          crossOrigin=""
        /> */}
      </Head>
    </>
  );
};

export default PageHead;
