"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const AboutSection = () => {
  return (
    <div className="container">
      <TextGenerateEffect
        words={"Giới thiệu về Authentic EDU"}
        textClassname="text-4xl capitalize"
        className="text-center"
      />

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-8">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4 text-primary font-bold")}>
                {item.title}
              </p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="500"
                    width="1000"
                    className="rounded-lg mb-10 object-cover h-[456px]"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

const dummyContent = [
  {
    title: "Bắt kịp kiến thức của thời đại",
    description: (
      <div className="text-base">
        <p>
          Trong thời đại công nghệ phát triển nhanh chóng, học sinh không chỉ
          học những kiến thức trong nhà trường mà còn phải cập nhật những xu
          hướng mới, giúp học sinh bắt kịp thời đại.
        </p>
        <br />
        <p>
          Trung tâm bồi dưỡng văn hóa Authentic EDU không chỉ là nơi cung cấp
          kiến thức mà còn là bệ phóng giúp học viên làm chủ tri thức, thích ứng
          với sự thay đổi của thế giới và phát triển toàn diện.
        </p>
        <br />
        <p>
          Việc áp dụng công nghệ, phương pháp giảng dạy mới và hướng đến hội
          nhập toàn cầu chính là chìa khóa giúp trung tâm Authentic EDU luôn
          hướng đến trong giáo dục.
        </p>
      </div>
    ),
    badge: "Authentic EDU",
    image: "/assets/education.avif",
  },
  {
    title: "Tầm nhìn và sứ mệnh",
    description: (
      <div className="text-base">
        <p>
          Trung tâm hướng đến việc xây dựng một môi trường học tập hiện đại,
          sáng tạo, và mang tính cá nhân hóa cao:
        </p>
        <ul className="space-y-2 list-inside list-disc">
          <li>Cung cấp giáo dục chất lượng</li>
          <li>Nâng cao năng lực của học viên</li>
          <li>Tạo môi trường học tập tích cực, hiện đại</li>
          <li>Cung cấp đội ngũ giáo viên chuyên nghiệp ở nhiều lĩnh vực</li>
          <li>
            Tùy chỉnh chương trình học thích ứng với nhu cầu của thời đại công
            nghệ
          </li>
        </ul>
      </div>
    ),
    badge: "Authentic EDU",
    image: "/assets/vision.avif",
  },
  {
    title: "Ý nghĩa của Authentic EDU",
    description: (
      <div className="text-base">
        <p>ACE là viết tắt của Authentic Education Center.</p>
        <br />
        <p>
          Logo của Authentic EDU với màu tím tượng trưng cho tuổi học trò tươi
          đẹp, trẻ trung và nhiều hoài bão. Chiếc mũ tốt nghiệp cũng ẩn trong
          hình tượng cuốn sách tượng trưng cho giáo dục, học tập và thành công
          trong học vấn.
        </p>
        <br />
        <p>
          Cây bút phía dưới là biểu tượng của trí thức, sự sáng tạo và khả năng
          diễn đạt. Tất cả tổng thể đó tạo nên một logo tươi cười hạnh phúc.
        </p>
      </div>
    ),
    badge: "Authentic EDU",
    image: "/assets/mission.jpg",
  },
  {
    title: "SỰ KHÁC BIỆT CỦA Authentic EDU",
    description: (
      <div className="text-base">
        <p>Hiểu rõ học sinh</p>
        <br />
        <p>
          Bạn được học tập theo nhu cầu với các lớp học bồi dưỡng được tổ chức
          liên tục suốt năm học.
        </p>
        <br />
        <p>Lớp học số lượng vừa phải, đảm bảo chất lượng là trên hết.</p>
        <br />
        <p>Học viên học tập với chương trình cá nhân hóa cao.</p>
        <br />
        <p>
          Chăm lo học tập cho học viên ở mức cao nhất, luôn cập nhật thông tin
          với phụ huynh.
        </p>
        <br />
        <p>Ứng dụng tối đa công nghệ và thực tiễn vào giảng bài.</p>
      </div>
    ),
    badge: "Authentic EDU",
    image: "/assets/unique.avif",
  },
];

export default AboutSection;
