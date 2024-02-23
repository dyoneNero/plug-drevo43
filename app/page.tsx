import Container from "./(components)/Container/Container";
import BlockInfo from "./(components)/BlockInfo/BlockInfo";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-gray h-screen flex justify-center">
      <Head>
        <meta name="yandex-verification" content="f44a600ceff299c8" />
      </Head>
      <Container>
        <BlockInfo />
      </Container>
    </main>
  );
}
