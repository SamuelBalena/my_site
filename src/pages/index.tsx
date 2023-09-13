import Head from "next/head";
import { About } from "../modules/About";
import { Header } from "../modules/Header";
import { Navbar } from "../components/Navbar";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Services } from "../modules/Services";
import { Divider } from "../components/Divider/styles";
import { Portfolio } from "../modules/Portfolio";
import { Testimonials } from "../modules/Testimonials";
import { Posts } from "../modules/Posts";
import { Footer } from "../modules/Footer";

GlobalStyles();

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Balena - Desenvolvedor Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
      <About />
      <Divider />
      <Services />
      <Portfolio />
      <Divider />
      <Testimonials />
      <Posts />
      <Footer />
    </>
  );
}
