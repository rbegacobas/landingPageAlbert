import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SimpleSolutions from '../components/SimpleSolutions';
import Agency from '../components/Agency';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <SimpleSolutions />
        <Agency />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
