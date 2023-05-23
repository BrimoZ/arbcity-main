import Head from "next/head";

import Welcome from "@/components/Welcome";
import Stats from "@/components/Stats";
import PartnersAndSocials from "@/components/PartnersAndSocials";
import Ads from "@/components/Ads";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pig Vault</title>
        <meta name="description" content="Welcome to Pig Vault" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className="py-16">
          <Welcome />
          <Stats />
          <PartnersAndSocials />
          <Ads />
        </main>
      </Container>
    </>
  );
}
