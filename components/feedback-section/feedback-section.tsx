import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { memo } from "react";

const FeedbackSection = () => {
  const testimonials = [
    {
      quote:
        "Trung tâm có môi trường học tập rất tốt, giáo viên tận tâm và luôn hỗ trợ học viên hết mình. Em đã tiến bộ rất nhiều sau khóa học!",
      name: "Cẩm Tiên",
      designation: "Học viên lớp Toán nâng cao",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Giáo trình rõ ràng, dễ hiểu, phương pháp giảng dạy thú vị giúp em tiếp thu nhanh hơn. Em rất thích học tại trung tâm này!",
      name: "Minh Nhật",
      designation: "Học viên lớp Anh Văn",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Trung tâm có nhiều hoạt động bổ ích giúp em vừa học vừa thực hành. Em cảm thấy tự tin hơn sau khi tham gia khóa học.",
      name: "Thành Thái",
      designation: "Học viên lớp Vật Lý",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Trung tâm có nhiều hoạt động bổ ích giúp em vừa học vừa thực hành. Em cảm thấy tự tin hơn sau khi tham gia khóa học.",
      name: "James Kim",
      designation: "Học viên lớp Anh Văn",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Cơ sở vật chất hiện đại, phòng học thoải mái và môi trường thân thiện. Em rất hài lòng khi học tại đây!",
      name: "Nhật Minh",
      designation: "Học viên lớp Lập trình Web",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div suppressHydrationWarning>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default memo(FeedbackSection);
