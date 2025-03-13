"user client";

import React from "react";
import HeroSection from "../hero-section/hero-section";
import FeedbackSection from "../feedback-section/feedback-section";
import CourseSection from "../courses-section/courses-section";
import Footer from "../footer/footer";
import TeacherSession from "../teachers-section/teachers-section";
import ScheduleTable from "../schedule/schedule";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className="pt-20">
        <div className="container">
          <div className="flex justify-center items-center flex-col lg:flex-row gap-5">
            <Image
              src={"/assets/main-poster.jpg"}
              alt="AEC"
              width={500}
              height={500}
              className="rounded-md"
            />
            <Image
              src={"/assets/teacher-poster.jpg"}
              alt="AEC"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <CourseSection />
      </div>

      <div className="pt-20">
        <TeacherSession />
      </div>

      <div className="pt-20">
        <ScheduleTable />
      </div>

      <div className="pt-20">
        <FeedbackSection />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
