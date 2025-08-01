import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const teachers = [
  {
    id: 1,
    name: "Nguyễn Hoài Phương",
    subject: "Hóa",
    yearGraduated: 2012,
    degree: "Thạc sĩ",
    worked: "Đinh Thiện Lý",
    working: "Không",
    university: "Đại học Sư Phạm Thành Phố Hồ Chí Minh",
    exp: 4,
    note: `Thạc sĩ hóa hữu cơ, tốt nghiệp 2018, ĐHKHTN TP HCM, luyện thi ĐH, bài tập thực tiễn,
    giúp HS chưa giỏi có niềm tin hơn`,
  },
  {
    id: 2,
    name: "Lê Chiến Thắng",
    subject: "Toán",
    yearGraduated: 2013,
    degree: "Đại học",
    worked: "Sao Việt",
    working: "Không",
    university: "Đại học Sư Phạm Thành Phố Hồ Chí Minh",
    exp: 11,
    note: `Hiểu học sinh, làm TT Toán THPT trường tư, biết cách quan tâm học sinh. Phương pháp giảng dạy dễ 
    hiểu và hài hước, vận dụng thực tế, sâu sắc từng học sinh`,
  },
  {
    id: 3,
    name: "Ngô Ngọc Phương Quyên",
    subject: "Văn",
    yearGraduated: 2023,
    degree: "Đại học (đang học thạc sĩ)",
    worked: "Sao Việt",
    working: "Không",
    university: "Đại học Sư Phạm Thành Phố Hồ Chí Minh",
    exp: 2,
    note: `Trẻ, nhiệt tình, nhẹ nhàng, biết sử dụng công nghệ, biết cách quan tâm đến học sinh`,
  },
  {
    id: 4,
    name: "Lê Thị Bích Thùy",
    subject: "Anh Văn",
    yearGraduated: 2011,
    degree: "Thạc sĩ",
    worked: "ĐH Võ Trường Toản - Cần Thơ",
    working: "Chuyên Trần Văn Giàu - Long An",
    university: "Đại học Cần Thơ",
    exp: 13,
    note: `Chuyên dạy FCE, CAE, CPE và các kì thi HSG, Olympic, Luyện thi lên
    lớp 10, Đại học, chương trình Bộ Giáo Dục`,
  },
  {
    id: 5,
    name: "Bùi Minh Thuận",
    subject: "Tin",
    yearGraduated: 2022,
    degree: "Đại học",
    worked: "Trung tâm lập trình BeCodeching",
    working: "LF Gloabl tech (Middle FE, Backend developer (Nestjs),...)",
    university: "Học viên công nghệ Bưu chính viễn thông (PTIT)",
    exp: 2.5,
    note: `Trẻ, có cách gỉang dạy lập trình phù hợp cho người mới bắt đầu.
    Kĩ năng lập trình web: HTML5, CSS3/SCSS, Javascript/Jquery, Bootstrap, Ant design,
    TailwindCss,...Reactjs/Nextjs, Nodejs/Nestjs, Mysql, MongoDB,...Kĩ năng giảng dạy tư luy lập trình
    ,định hướng IT, phỏng vấn xin việc làm.`,
  },
  {
    id: 6,
    name: "Dương Thị Hồng Huynh",
    subject: "Lý",
    yearGraduated: 2013,
    degree: "Đại học",
    worked: "Sao Việt",
    working: "Không",
    university: "Đại học Sư Phạm Thành Phố Hồ Chí Minh",
    exp: 11,
    note: `Nhiệt tình, nhẹ nhàng, có kinh nghiệm quan tâm chăm sóc học sinh,
    hết lòng vì học sinh, có chuyên môn vững`,
  },
];

const TeacherSession = () => {
  return (
    <div className="w-full">
      <div className="container">
        <TextGenerateEffect
          words={"Đội ngũ giáo viên"}
          className="text-center"
          textClassname="text-2xl lg:text-3xl capitalize"
        />

        <Table className="mt-14">
          <TableCaption>Danh sách giáo viên tại AEC</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">STT</TableHead>
              <TableHead>Giáo viên</TableHead>
              <TableHead>Môn học</TableHead>
              <TableHead>Năm tốt nghiệp</TableHead>
              <TableHead>Trường đại học</TableHead>
              <TableHead>Trình độ</TableHead>
              <TableHead>Nơi đã làm việc</TableHead>
              <TableHead>Nơi đang làm việc</TableHead>
              <TableHead>Số năm kinh nghiệm</TableHead>
              <TableHead>Thế mạnh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell className="font-medium">{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.yearGraduated}</TableCell>
                <TableCell>{teacher.university}</TableCell>
                <TableCell>{teacher.degree}</TableCell>
                <TableCell>{teacher.worked}</TableCell>
                <TableCell>{teacher.working}</TableCell>
                <TableCell>{teacher.exp}</TableCell>
                <TableCell className="max-w-sm">{teacher.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={9}>Tổng số giáo viên</TableCell>
              <TableCell className="text-right">
                {teachers.length} giáo viên
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default TeacherSession;
