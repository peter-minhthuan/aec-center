export const courseSlug = {
  math: "/course/math",
  frontend: "/course/frontend",
  design: "/course/design",
  sat: "/course/sat",
  english: "/course/english",
  physics: "/course/physics",
};

export const courses = [
  {
    title: "Toán",
    description: `Dạy kèm môn Toán là một hình thức giáo dục bổ trợ quan trọng, giúp học
        sinh cải thiện kiến thức và kỹ năng giải toán. Toán học không chỉ là một
        môn học bắt buộc trong chương trình giáo dục, mà còn là nền tảng quan
        trọng cho nhiều ngành nghề trong tương lai. Vì vậy, việc học tốt môn
        Toán có thể mở ra nhiều cơ hội cho học sinh.`,
    link: courseSlug.math,
  },
  {
    title: "Tiếng Anh",
    description: `Luyện thi Tiếng Anh vào lớp 10 và luyện thi chuyên Anh vào trường chuyên
        là quá trình quan trọng giúp học sinh đạt được mục tiêu học tập cao hơn.`,
    link: courseSlug.english,
  },
  {
    title: "Luyện thi SAT",
    description: `Kỳ thi SAT (Scholastic Assessment Test) là một trong những kỳ thi chuẩn
        hóa quan trọng dành cho học sinh trung học có ý định đăng ký vào các
        trường đại học tại Mỹ. Được tổ chức bởi College Board, kỳ thi này nhằm
        đánh giá kỹ năng tư duy, khả năng phân tích và kiến thức của học sinh
        trong các lĩnh vực chính như Toán học, Đọc hiểu và Viết.`,
    link: courseSlug.sat,
  },
  {
    title: "Lập trình web",
    description: `Bạn muốn trở thành lập trình viên chuyên nghiệp? 
    Khóa học lập trình tại AEC sẽ giúp bạn làm chủ các ngôn ngữ lập trình hiện đại như HTML5, CSS3/SCSS, JavaScript/JQuery, Reactjs,..
    và nhiều công nghệ khác. Với đội ngũ giảng viên giàu kinh nghiệm, 
    chương trình học thực tiễn, cùng môi trường học tập năng động, 
    AEC cam kết trang bị cho bạn kiến thức vững chắc và kỹ năng thực chiến để sẵn sàng cho công việc trong ngành công nghệ.`,
    link: courseSlug.frontend,
  },
  {
    title: "Thiết kế",
    description: `Bạn đam mê thiết kế đồ họa? Bạn muốn thành thạo Photoshop để sáng tạo hình ảnh chuyên nghiệp?
    Hãy tham gia khóa học Thiết kế Photoshop tại Authentic EDU, nơi cung cấp lộ trình học tập bài bản, 
    giúp bạn làm chủ công cụ thiết kế hàng đầu thế giới.`,
    link: courseSlug.design,
  },
  {
    title: "Vật lý",
    description: `Vật lý là một môn học quan trọng, không chỉ giúp học sinh hiểu về các quy 
    luật của tự nhiên mà còn rèn luyện tư duy logic và khả năng giải quyết vấn đề. 
    Tuy nhiên, không ít học sinh gặp khó khăn khi tiếp cận môn học này do tính trừu 
    tượng và yêu cầu cao về kỹ năng tính toán. Hiểu được điều đó, trung tâm bồi dưỡng văn hóa 
    Authentic EDU mang đến chương trình dạy thêm Vật lý chuyên sâu, giúp học sinh nắm vững kiến thức 
    và tự tin đạt kết quả cao trong các kỳ thi.`,
    link: courseSlug.physics,
  },
];
