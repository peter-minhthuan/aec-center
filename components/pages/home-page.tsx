"user client";

import React from "react";
import HeroSection from "../hero-section/hero-section";
import FeedbackSection from "../feedback-section/feedback-section";
import CourseSection from "../courses-section/courses-section";
import Footer from "../footer/footer";
// import AboutSection from "../about-section/about-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className="pt-10">
        <CourseSection />
      </div>

      {/* <div className="pt-20">
        <AboutSection />
      </div> */}

      <div className="pt-20">
        <FeedbackSection />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
