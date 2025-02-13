import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Faq from "./sections/Faq.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import Product from "./sections/Product.jsx";
import Info from "./sections/Info.jsx";


const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Product />
      <Faq />
      <Info />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
