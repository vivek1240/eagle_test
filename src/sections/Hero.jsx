import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import "../styles/custom.css"

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
            </div>
            <h1 className="custom-font text-white">
            AI Powered Geo Science Exploration

            </h1>
            <p className="mb-14 body-1 max-md:mb-10 sub-heading">
            <span className="block mb-3">Geo-Science Agents Working 24×7 for You.</span>
            <span className="block">Automate research analysis across geoscience archives to uncover insights—faster.</span>
            </p>

            <LinkScroll to="contact" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Contact Us</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="images/new_logo.svg"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
