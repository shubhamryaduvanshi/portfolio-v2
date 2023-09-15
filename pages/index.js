import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Bubbles from "../components/Bubbles";
export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Yadav - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm a Web Developer based in India. I specialize
          in building (and occasionally designing) exceptional websites,
          applications, and everything in between."
        />
        <meta name="og:image" content="/myProfile.png" />
        <meta
          name="keywords"
          content="Shubham Yadav, Web developer in thane, Web developer in Mumbai, MEAN Stack developer in Thane, MERN Stack developer in Thane, MERN Stack developer in Mumbai, Frontend developer in thane, Frontend developer in Mumbai, Full Stack developer in thane, Full Stack developer in Mumbai, Web developer in India, MEAN Stack developer in India, MERN Stack developer in India, Frontend developer in India, Full Stack developer in India,
          Web Developer,
UI Designer,
Front-end Developer,
Mumbai, India,
Responsive Web Design,
HTML5,
CSS3,
JavaScript,
User Interface (UI),
User Experience (UX),
Mobile-First Design,
Bootstrap,
React.js,
Angular,
Vue.js,
Web Accessibility,
Cross-Browser Compatibility,
Progressive Web Apps (PWAs),
Animation and Transitions,
Performance Optimization,
Wireframing,
Prototyping,
Adobe XD,
Figma,
Code Quality,
Version Control (e.g., Git),
Web Design Trends,
Portfolio Showcase,
Project Highlights,
Client Testimonials,
Mumbai Skyline (for visual aesthetics),
Contact Information,
Skill Set,
Code Samples,
GitHub Repository,
LinkedIn Profile,
Freelancer/Contractor Availability"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="NXakTCEJyt8LNrTq3FyMv97qG0nm74Wy8sC-MFiPagA" />
      </Head>
      <div className="font-poppins relative scroll-smooth">
        <div className="fixed -z-20">    <Bubbles />   </div>
        <Header />
        <Hero />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
