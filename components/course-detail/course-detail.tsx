/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { courseSlug } from "@/constant/common";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const coursesContent = {
  [courseSlug.present]: {
    description: (
      <div className="text-foreground">
        {/* <Image
          src={"/assets/intro-present.jpg"}
          width={500}
          height={350}
          alt="kỹ năng thuyết trình"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        /> */}

        <iframe
          className="aspect-video"
          src="https://www.youtube.com/embed/414h8tsDsM4"
          title='📢 TỔNG KẾT BUỔI HỌC "TỰ TIN CẤT LỜI" ĐẦU TIÊN: BẮT ĐẦU HÀNH TRÌNH BỨT PHÁ! 🚀'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <br />

        <section className="space-y-2">
          GÓC BẬT MÍ NHÂN VẬT HOT NHẤT KHÓA HỌC 🔥
          <br />
          📣 Nhà Authentic quyết định "TUNG BÍ MẬT" về giáo viên của khóa học
          “TỰ TIN CẤT LỜI”
          <br />
          👉 GV Hướng dẫn: thầy LÊ THANH LỘC <br />
          🔥 Một MC “cháy sân khấu” – với nhiều năm kinh nghiệm dẫn chương
          trình.
          <br />
          🌟 Một người thầy tận tâm luôn đồng hành cùng nhiều học sinh phá bỏ
          rào cản của nỗi sợ để dám nói, biết nói và nói thật hay trước đám
          đông!
          <br /> 👉 Một người bạn chân thành siêu dễ gần, siêu truyền cảm hứng
          và đặc biệt hiểu tâm lý học sinh giúp học sinh nói hay – nghĩ tốt –
          thể hiện bản thân một cách TỰ NHIÊN và ĐẲNG CẤP. Khóa học “TỰ TIN CẤT
          LỜI”, không phải là lớp học lý thuyết.
          <br /> Đây là hành trình:
          <br /> ✅ Gỡ bỏ rào cản tâm lý <br />✅ Rèn giọng – tập thần thái –
          luyện ánh nhìn
          <br /> ✅ Tự tin trình bày quan điểm trước người lạ
          <br /> 🎉🎉🎉 Ưu đãi giới hạn chỉ dành cho học sinh đăng ký sớm:
          <br /> 🎁 02 buổi thực hành chủ đề tự chọn <br />
          🎁 90 phút ôn tập Toán miễn phí
          <br /> 🎁 01 buổi học ngoại khóa cực kỳ thú vị
          <br /> 📞 Liên hệ ngay: 0907 792 604 – Thầy LÊ CHIẾN THẮNG <br />
          ❤️ Authentic EDU – Nơi học trò được là chính mình!
          <br />
          🎓 Authentic EDU |Trung Tâm Phát Triển Giáo Dục & Kỹ Năng Học Đường
          <br />
          📍 Tòa nhà MIND X, 165 -167, Đ. Nguyễn Thị Thập, KDC Him Lam, P. Tân
          Hưng (Quận 7 cũ) Tp. Hồ Chí Minh
          <br /> 📞 Hotline: 0907 792 604 – Thầy Lê Chiến Thắng
          <br />
          <br />
          <Image
            src={"/assets/present-detail.jpg"}
            width={500}
            height={350}
            alt="kỹ năng thuyết trình"
            className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
          />
        </section>
      </div>
    ),
  },
  [courseSlug.math]: {
    description: (
      <div className="text-foreground">
        <Image
          src={"/assets/math.jpg"}
          width={500}
          height={350}
          alt="Toán"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        />

        <p>
          Dạy kèm môn Toán là một hình thức giáo dục bổ trợ quan trọng, giúp học
          sinh cải thiện kiến thức và kỹ năng giải toán. Toán học không chỉ là
          một môn học bắt buộc trong chương trình giáo dục, mà còn là nền tảng
          quan trọng cho nhiều ngành nghề trong tương lai. Vì vậy, việc học tốt
          môn Toán có thể mở ra nhiều cơ hội cho học sinh.
        </p>
        <br />
        <p>
          Dạy kèm môn Toán tại trung tâm bồi dưỡng văn hóa Authentic EDU mang
          lại nhiều ưu điểm vượt trội. Trung tâm cung cấp môi trường học tập
          hiện đại, đội ngũ giáo viên giàu kinh nghiệm và phương pháp giảng dạy
          chuyên sâu. Học sinh được tiếp cận với giáo trình cập nhật, bài giảng
          thiết kế phù hợp với từng cấp độ, giúp nâng cao hiệu quả học tập.
        </p>
        <br />
        <p>
          Ngoài ra, Authentic EDU còn có các lớp học nhóm nhỏ giúp tăng tính
          tương tác, đồng thời tạo điều kiện để học sinh phát triển tư duy toán
          học một cách tối ưu.
        </p>
        <br />
        <p>
          Quy trình ghi danh tại Authentic EDU bao gồm các bước cụ thể nhằm đảm
          bảo học sinh có trải nghiệm học tập tốt nhất. Đầu tiên, học sinh sẽ
          tham gia bài kiểm tra thử trình độ để đánh giá năng lực hiện tại. Dựa
          trên kết quả kiểm tra, trung tâm sẽ tư vấn lịch học phù hợp, xây dựng
          giải pháp học tập cá nhân hóa để đáp ứng nhu cầu riêng của từng học
          sinh.
        </p>
        <br />
        <p>
          Trong quá trình học, trung tâm áp dụng phương pháp đánh giá định kỳ
          nhằm theo dõi tiến bộ của học sinh, từ đó điều chỉnh lộ trình học tập
          hiệu quả hơn. Giáo viên môn Toán của Authentic EDU không chỉ giúp học
          sinh củng cố lại kiến thức đã học trên lớp mà còn giúp họ phát triển
          tư duy logic, kỹ năng giải quyết vấn đề và khả năng suy luận. Giáo
          viên có thể thiết kế bài giảng phù hợp với trình độ của từng học sinh,
          giúp họ tiến bộ nhanh hơn và tự tin hơn trong học tập.
        </p>
      </div>
    ),
  },
  [courseSlug.english]: {
    description: (
      <div className="text-foreground">
        <Image
          src={"/assets/english.jpg"}
          width={500}
          height={350}
          alt="Tiếng Anh"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        />
        <p>
          Luyện thi Tiếng Anh vào lớp 10 và luyện thi chuyên Anh vào trường
          chuyên là quá trình quan trọng giúp học sinh đạt được mục tiêu học tập
          cao hơn.
        </p>
        <br />
        <p>
          Tại TP. Hồ Chí Minh, nhu cầu luyện thi Tiếng Anh vào lớp 10 và chuyên
          Anh ngày càng cao do sự cạnh tranh gay gắt trong các kỳ thi tuyển
          sinh. Các trường chuyên hàng đầu như THPT Chuyên Lê Hồng Phong, THPT
          Chuyên Trần Đại Nghĩa và các lớp chuyên Anh tại các trường điểm luôn
          có tỷ lệ chọi cao, đòi hỏi học sinh phải có sự chuẩn bị kỹ lưỡng.
        </p>
        <br />
        <p>
          Do đó, nhiều phụ huynh và học sinh tìm đến các trung tâm luyện thi uy
          tín để đảm bảo kết quả tốt nhất.
        </p>
        <br />
        <p>
          Luyện thi tại trung tâm bồi dưỡng văn hóa Authentic EDU mang lại nhiều
          ưu điểm vượt trội. Đặc biệt, trung tâm có đội ngũ giáo viên là giáo
          viên từ trường chuyên ,giàu kinh nghiệm giảng dạy và luyện thi chuyên,
          luyện thi HSG tiếng Anh toàn quốc. Giáo trình được xây dựng theo cấu
          trúc đề thi mới nhất, giúp học sinh làm quen với các dạng bài thi phổ
          biến như đọc hiểu, viết luận, ngữ pháp, từ vựng và kỹ năng nghe.
          Authentic EDU còn có các lớp học nhóm nhỏ giúp tăng cường tương tác
          giữa giáo viên và học sinh, đảm bảo mọi thắc mắc được giải đáp kịp
          thời.
        </p>
        <br />
        <p>
          Quy trình ghi danh tại Authentic EDU được thiết kế chặt chẽ nhằm đảm
          bảo học sinh có lộ trình học tập hiệu quả. Trước tiên, học sinh sẽ
          tham gia bài kiểm tra đánh giá năng lực để xác định trình độ hiện tại.
          Dựa vào kết quả kiểm tra, trung tâm sẽ tư vấn lịch học phù hợp, xây
          dựng kế hoạch ôn luyện cá nhân hóa theo khả năng của từng học sinh.
          Trong suốt quá trình học, học sinh sẽ được kiểm tra định kỳ để đánh
          giá tiến bộ và điều chỉnh phương pháp học tập phù hợp.
        </p>
      </div>
    ),
  },
  [courseSlug.sat]: {
    description: (
      <div className="text-foreground">
        <Image
          src={"/assets/test.avif"}
          width={500}
          height={350}
          alt="Luyện thi SAT"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        />
        <p>
          Kỳ thi SAT (Scholastic Assessment Test) là một trong những kỳ thi
          chuẩn hóa quan trọng dành cho học sinh trung học có ý định đăng ký vào
          các trường đại học tại Mỹ. Được tổ chức bởi College Board, kỳ thi này
          nhằm đánh giá kỹ năng tư duy, khả năng phân tích và kiến thức của học
          sinh trong các lĩnh vực chính như Toán học, Đọc hiểu và Viết.
        </p>
        <br />
        <p>
          Bài thi SAT bao gồm hai phần chính: Evidence-Based Reading and Writing
          (Đọc hiểu và Viết dựa trên bằng chứng) và Math (Toán học). Phần Đọc
          hiểu kiểm tra khả năng phân tích văn bản và hiểu ý chính của các đoạn
          văn học thuật. Phần Viết yêu cầu học sinh chỉnh sửa câu và đánh giá
          chất lượng lập luận.
        </p>
        <br />
        <p>
          Trong khi đó, phần Toán tập trung vào đại số, giải quyết vấn đề và
          phân tích dữ liệu. Tổng điểm của kỳ thi SAT dao động từ 400 đến 1600
          điểm. SAT đóng vai trò quan trọng trong quá trình tuyển sinh đại học
          tại Mỹ và một số quốc gia khác. Nhiều trường đại học sử dụng điểm SAT
          như một tiêu chí quan trọng để đánh giá ứng viên, bên cạnh hồ sơ học
          tập và các hoạt động ngoại khóa. Ngoài ra, một số chương trình học
          bổng cũng yêu cầu điểm SAT để xét tuyển.
        </p>
        <br />
        <p>
          Dưới đây là danh sách 15 trường đại học hàng đầu trên thế giới xét
          tuyển bằng điểm thi SAT:
        </p>
        <br />

        <ul className="list-disc list-inside">
          <li>Harvard University (Mỹ)</li>
          <li>Stanford University (Mỹ)</li>
          <li>Massachusetts Institute of Technology - MIT (Mỹ)</li>
          <li>Princeton University (Mỹ)</li>
          <li>Yale University (Mỹ)</li>
          <li>Columbia University (Mỹ)</li>
          <li>University of Chicago (Mỹ)</li>
          <li>California Institute of Technology - Caltech (Mỹ)</li>
          <li>University of Pennsylvania (Mỹ)</li>
          <li>Duke University (Mỹ)</li>
          <li>Johns Hopkins University (Mỹ)</li>
          <li>University of Toronto (Canada)</li>
          <li>University of Oxford (Anh)</li>
          <li>University of Cambridge (Anh)</li>
          <li>National University of Singapore - NUS (Singapore)</li>
        </ul>

        <br />

        <p>
          Việc chuẩn bị cho kỳ thi SAT đòi hỏi sự tập trung và chiến lược học
          tập hợp lý. Học sinh thường luyện tập bằng các bài thi mẫu, tham gia
          các khóa học SAT hoặc sử dụng tài liệu ôn luyện trực tuyến. Bằng cách
          nắm vững cấu trúc đề thi, áp dụng chiến thuật làm bài hiệu quả và thực
          hành thường xuyên, học sinh có thể đạt được điểm số cao, từ đó tăng cơ
          hội vào các trường đại học mong muốn.
        </p>

        <br />

        <p>
          Trung tâm bồi dưỡng văn hóa Authentic EDU cung cấp chương trình luyện
          thi SAT chuyên sâu, giúp học sinh nắm vững kiến thức và kỹ năng cần
          thiết để đạt điểm cao. Với đội ngũ giáo viên giàu kinh nghiệm, giáo
          trình bám sát cấu trúc đề thi và phương pháp giảng dạy hiệu quả,
          Authentic EDU mang đến môi trường học tập tối ưu. Học sinh sẽ được
          kiểm tra đánh giá đầu vào, tư vấn lộ trình học tập phù hợp và tham gia
          các bài thi thử định kỳ để theo dõi tiến bộ. Đây là lựa chọn lý tưởng
          để học sinh chuẩn bị tốt nhất cho kỳ thi SAT và tăng cơ hội trúng
          tuyển vào các trường đại học hàng đầu thế giới.
        </p>
      </div>
    ),
  },
  [courseSlug.frontend]: {
    description: (
      <div className="text-foreground">
        <Image
          src={"/assets/code.jpg"}
          width={500}
          height={350}
          alt="Code frontend"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        />

        <p>Vì sao nên học lập trình web tại Authentic EDU?</p>
        <ul className="space-y-2 mt-2">
          <li>
            ✅ <strong>Giảng viên giàu kinh nghiệm:</strong> Bạn sẽ được hướng
            dẫn bởi các lập trình viên chuyên nghiệp, có nhiều năm kinh nghiệm
            trong ngành công nghệ.
          </li>
          <li>
            ✅ <strong>Chương trình học từ cơ bản đến nâng cao:</strong> Khóa
            học phù hợp với cả người mới bắt đầu và những ai muốn nâng cao kỹ
            năng. Bạn sẽ được học các ngôn ngữ lập trình phổ biến như HTML, CSS,
            JavaScript, Bootstrap, ReactJS, NodeJS và nhiều công nghệ hiện đại
            khác.
          </li>
          <li>
            ✅ <strong>Học đi đôi với thực hành:</strong> Mỗi buổi học đều kết
            hợp lý thuyết và bài tập thực tế. Học viên sẽ trực tiếp xây dựng các
            dự án website cá nhân, thương mại điện tử, blog và nhiều ứng dụng
            web hữu ích.
          </li>
          <li>
            ✅ <strong>Hỗ trợ thực tập & định hướng nghề nghiệp:</strong>{" "}
            Authentic EDU không chỉ dạy lập trình mà còn hướng dẫn bạn cách ứng
            tuyển vào các công ty công nghệ, chuẩn bị CV và xây dựng portfolio
            chuyên nghiệp.
          </li>
        </ul>
        <br />

        <Image
          src={"/assets/git.jpg"}
          width={500}
          height={350}
          alt="git"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        />

        <p>Bạn sẽ học được gì sau khóa học?</p>
        <ul className="space-y-2 mt-2">
          <li>
            ✔️{" "}
            <strong>
              Thành thạo thiết kế giao diện web chuyên nghiệp, chuẩn UI/UX
            </strong>
          </li>
          <li>
            ✔️{" "}
            <strong>
              Hiểu và sử dụng thành thạo HTML, CSS, JavaScript để tạo website
              tương tác
            </strong>
          </li>
          <li>
            ✔️ <strong>Xây dựng ứng dụng web động với ReactJS và NodeJS</strong>
          </li>
          <li>
            ✔️{" "}
            <strong>
              Làm việc với cơ sở dữ liệu và triển khai website lên môi trường
              thực tế
            </strong>
          </li>
          <li>
            ✔️{" "}
            <strong>
              Tự tin ứng tuyển vào các vị trí Front-end Developer tại các công
              ty công nghệ
            </strong>
          </li>
          <li>
            ✔️{" "}
            <strong>
              Nắm được các kỹ năng cần có của 1 lập trình viên thực thụ như: Kỹ
              Năng Lập Trình (Technical Skills), Kỹ Năng Giải Quyết Vấn Đề
              (Problem-Solving), Kỹ Năng Học Hỏi & Cập Nhật Công Nghệ
            </strong>
          </li>
        </ul>

        <br />
        <p>
          Với phương pháp giảng dạy thực tế, dễ hiểu và đội ngũ giảng viên tận
          tâm, Authentic EDU cam kết mang đến cho bạn nền tảng vững chắc để phát
          triển trong lĩnh vực lập trình web.
        </p>
      </div>
    ),
  },
  [courseSlug.design]: {
    description: (
      <div className="text-foreground">
        <Image
          src={"/assets/design.avif"}
          width={500}
          height={350}
          alt="thiết kế"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        />

        <p>
          Bạn đam mê thiết kế đồ họa? Bạn muốn thành thạo Photoshop để sáng tạo
          hình ảnh chuyên nghiệp? Hãy tham gia khóa học Thiết kế Photoshop tại
          Authentic EDU, nơi cung cấp lộ trình học tập bài bản, giúp bạn làm chủ
          công cụ thiết kế hàng đầu thế giới.
        </p>

        <br />

        <p>
          Tại Authentic EDU, bạn sẽ được hướng dẫn bởi các giảng viên giàu kinh
          nghiệm trong lĩnh vực thiết kế đồ họa. Chương trình học được xây dựng
          từ cơ bản đến nâng cao, phù hợp với cả người mới bắt đầu và những ai
          muốn nâng cao kỹ năng. Bạn sẽ học cách chỉnh sửa ảnh chuyên sâu, thiết
          kế banner, poster, logo, tạo hiệu ứng hình ảnh và nhiều kỹ năng quan
          trọng khác.
        </p>

        <br />

        <p>
          Lớp học áp dụng phương pháp giảng dạy thực hành, giúp học viên vừa học
          vừa làm để nắm vững kiến thức nhanh chóng. Mỗi buổi học đều có bài tập
          thực tế, giúp bạn xây dựng sản phẩm thiết kế ngay trong khóa học.
          Ngoài ra, bạn còn được hướng dẫn các xu hướng thiết kế mới nhất, tối
          ưu hóa hình ảnh cho quảng cáo, mạng xã hội và thương mại điện tử.
        </p>

        <br />

        <p>
          Sau khi hoàn thành khóa học, học viên sẽ tự tin sử dụng Photoshop để
          thiết kế chuyên nghiệp, có thể ứng dụng trong công việc hoặc phát
          triển sự nghiệp trong lĩnh vực thiết kế đồ họa. Đặc biệt, Authentic
          EDU hỗ trợ cấp chứng nhận hoàn thành khóa học và tư vấn hướng đi cho
          học viên có nhu cầu làm việc trong ngành sáng tạo.
        </p>

        <br />

        <p>
          Đừng bỏ lỡ cơ hội nâng cao kỹ năng thiết kế! Đăng ký ngay khóa học
          Photoshop tại Authentic EDU để biến đam mê thành hiện thực!
        </p>
      </div>
    ),
  },
  [courseSlug.physics]: {
    description: (
      <div className="text-foreground">
        <Image
          src={"/assets/physic.avif"}
          width={500}
          height={350}
          alt="vật lý"
          className="mx-auto mb-8 rounded-md max-w-[500px] w-full"
        />

        <p>
          Vật lý là một môn học quan trọng, không chỉ giúp học sinh hiểu về các
          quy luật của tự nhiên mà còn rèn luyện tư duy logic và khả năng giải
          quyết vấn đề. Tuy nhiên, không ít học sinh gặp khó khăn khi tiếp cận
          môn học này do tính trừu tượng và yêu cầu cao về kỹ năng tính toán.
          Hiểu được điều đó, trung tâm bồi dưỡng văn hóa Authentic EDU mang đến
          chương trình dạy thêm Vật lý chuyên sâu, giúp học sinh nắm vững kiến
          thức và tự tin đạt kết quả cao trong các kỳ thi.
        </p>

        <br />

        <p>
          Tại Authentic EDU, học sinh sẽ được giảng dạy bởi đội ngũ giáo viên
          giàu kinh nghiệm, tận tâm và có phương pháp sư phạm hiệu quả. Chương
          trình học được thiết kế bài bản, bám sát chương trình phổ thông nhưng
          đồng thời mở rộng kiến thức thực tế, giúp học sinh hiểu sâu và vận
          dụng linh hoạt vào bài tập. Không chỉ dừng lại ở việc học lý thuyết,
          học sinh còn được thực hành giải đề, tham gia các bài kiểm tra định kỳ
          và được hướng dẫn những mẹo làm bài thi hiệu quả.
        </p>

        <br />

        <p>
          Ngoài ra, trung tâm áp dụng phương pháp giảng dạy sinh động, kết hợp
          giữa lý thuyết và thực tiễn, giúp học sinh không chỉ học để thi mà còn
          thực sự yêu thích môn Vật lý. Các lớp học có sĩ số giới hạn để đảm bảo
          mỗi học sinh đều nhận được sự quan tâm và hướng dẫn tận tình từ giáo
          viên.
        </p>

        <br />

        <p>
          Nếu bạn đang tìm kiếm một địa chỉ uy tín để nâng cao kiến thức Vật lý,
          Authentic EDU chính là lựa chọn lý tưởng. Hãy để chúng tôi đồng hành
          cùng bạn trên hành trình chinh phục môn học này và đạt được những
          thành tích ấn tượng!
        </p>
      </div>
    ),
  },
};

const CourseDetail = () => {
  const params = useParams();
  const slug = `/course/${params[":slug"]}`;

  if (!coursesContent[slug as unknown as any]?.description) {
    return null;
  }

  return (
    <div className="pb-20">
      <div className="max-w-[920px] w-full mx-auto">
        <div className="lg:px-24 px-4 bg-card py-12 shadow-lg rounded-md">
          {coursesContent[slug as unknown as any].description}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
