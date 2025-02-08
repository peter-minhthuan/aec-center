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

export const courses = [
  {
    title: "Toán",
    description: "Học toán từ cơ bản tới nâng cao",
    link: "#",
  },
  {
    title: "Tiếng Anh",
    description: "Học tiếng anh từ cơ bản tới nâng cao",
    link: "#",
  },
  {
    title: "Luyện thi SAT",
    description: "Luyện thi SAT chuyên nghiệp",
    link: "#",
  },
  {
    title: "Lập trình",
    description: "Lập trình Web front-end từ cơ bản đến nâng cao",
    link: "#",
  },
  {
    title: "Thiết kế",
    description: "Học thiết kế cơ bản đến nâng cao",
    link: "#",
  },
  {
    title: "Vật lý",
    description: "Học vật lý từ cơ bản đến nâng cao",
    link: "#",
  },
];
