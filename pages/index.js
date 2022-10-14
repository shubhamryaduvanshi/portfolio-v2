import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Yadav</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm a Frontend Web Developer based in India. I specialize
          in building (and occasionally designing) exceptional websites,
          applications, and everything in between. I'm focused on building
          responsive front-end web application while learning backend
          technologies."
        />
      </Head>
      <div className="font-poppins relative">
        <Header />
        <Hero />
        <About />
        <Work />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
