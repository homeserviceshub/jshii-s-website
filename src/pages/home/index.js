import React from "react";
import MainSlider from "../../components/slider";
import FeatureSection from "../../components/featureSection";
import WhyChooseUs from "../../components/whyChooseUs";
import OurServices from "../../components/ourServices";
import ContactForm from "../../components/contactForm";
import GalleryInPage from "../../components/galleryComponents/gallaryInPage";

const Home = () => {
  return (
    <>
      <MainSlider />
      <FeatureSection />
      <WhyChooseUs />
      <OurServices />
      <GalleryInPage />
      <ContactForm />
    </>
  );
};

export default Home;
