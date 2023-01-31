import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Scrollbar from '@/components/Scrollbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tony B. NYA | Portfolio</title>
        <meta name="description" content="Hi there! My name is Tony B. NYA. I'm a Software Engineer and a Web Developer from Cameroon. Let us get in touch!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 font-ms">
        <section className="min-h-screen">
          <Navbar />
          <Scrollbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  )
}
