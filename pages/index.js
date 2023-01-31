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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-14 font-ms">
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
