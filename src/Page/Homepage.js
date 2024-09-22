import React from "react";
import HomeIntro from "../Components/HomeIntro";
import Header from "../Components/Header";
import Features from "../Components/Features";
import ImageTextLayout from "../Components/ImageTextLayout";
import Pitch from "../Components/Pitch";
import GallerySection from "../Components/GallarySection";
import Slate from "../Components/Slate";
import EndExit from "../Components/EndExit";
import Social from "../Components/Social";
import InfoSection from "../Components/InfoSection";

const Homepage = () => {
  return (
    <>
      <div className="container space-y-9 mx-auto px-4 lg:px-8">
        <Header />
        <HomeIntro />
        <Features />
        <ImageTextLayout />
        <Pitch />
        <GallerySection />
        <Slate />
        <EndExit />
        <Social />
        <InfoSection />
      </div>
    </>
  );
};

export default Homepage;
