import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { memo } from "react";

const FeedbackSection = () => {
  const testimonials = [
    {
      quote:
        "Giáo trình rõ ràng, dễ hiểu, phương pháp giảng dạy thú vị giúp em tiếp thu nhanh hơn. Em rất thích học tại trung tâm này!",
      name: "Minh Nhật",
      designation: "Học viên lớp Anh Văn",
      src: "/assets/message.avif",
    },
    {
      quote:
        "Trung tâm có môi trường học tập rất tốt, giáo viên tận tâm và luôn hỗ trợ học viên hết mình. Em đã tiến bộ rất nhiều sau khóa học!",
      name: "Cẩm Tiên",
      designation: "Học viên lớp Toán nâng cao",
      src: "/assets/chats.avif",
    },
    {
      quote:
        "Trung tâm có nhiều hoạt động bổ ích giúp em vừa học vừa thực hành. Em cảm thấy tự tin hơn sau khi tham gia khóa học.",
      name: "Thành Thái",
      designation: "Học viên lớp Vật Lý",
      src: "/assets/message.avif",
    },
    {
      quote:
        "Trung tâm có nhiều hoạt động bổ ích giúp em vừa học vừa thực hành. Em cảm thấy tự tin hơn sau khi tham gia khóa học.",
      name: "James Kim",
      designation: "Học viên lớp Anh Văn",
      src: "/assets/chats.avif",
    },
    {
      quote:
        "Cơ sở vật chất hiện đại, phòng học thoải mái và môi trường thân thiện. Em rất hài lòng khi học tại đây!",
      name: "Nhật Minh",
      designation: "Học viên lớp Lập trình Web",
      src: "/assets/message.avif",
    },
    {
      quote:
        "Chương trình học được thiết kế bài bản, phù hợp với cả người mới bắt đầu và những ai muốn nâng cao kỹ năng. Học viên được học từ cơ bản đến nâng cao về UI/UX, nguyên tắc thiết kế, màu sắc, typography, cũng như sử dụng các công cụ phổ biến như Figma, Adobe XD, Photoshop,...",
      name: "Nhật Hào",
      designation: "Học viên lớp thiết kết",
      src: "/assets/chats.avif",
    },
  ];

  return (
    <div suppressHydrationWarning>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default memo(FeedbackSection);
