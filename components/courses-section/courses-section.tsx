import { courses } from "@/constant/common";
import { HoverEffect } from "../ui/card-hover-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export const courseId = "course-id";

const CourseSection = () => {
  return (
    <div id={courseId}>
      <TextGenerateEffect
        words={"Các khóa học tại AEC"}
        className="text-center"
        textClassname="text-4xl capitalize"
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={courses} />
      </div>
    </div>
  );
};

export default CourseSection;
