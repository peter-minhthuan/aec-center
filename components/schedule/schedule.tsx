import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const schedule = [
  {
    time: "Ca tối 1 (17h45-19h15)",
    mon: "Toán",
    tue: "Hóa",
    wed: "Văn",
    thu: "Văn",
    fri: "Luyện thi toán",
    sat: "Văn và đời sống",
    sun: "Luyện thi toán",
  },
  {
    time: "Lớp online",
    mon: "",
    tue: "SAT",
    wed: "Chuyên Anh",
    thu: "",
    fri: "SAT",
    sat: "Chuyên Anh",
    sun: "Lập trình web",
  },
  {
    time: "Ca tối 2 (19h20-20h50)",
    mon: "Toán",
    tue: "Hóa",
    wed: "Toán",
    thu: "Hóa",
    fri: "Văn và đời sống",
    sat: "Hóa",
    sun: "Luyện thi toán",
  },
  {
    time: "Lớp online",
    mon: "Lập trình web",
    tue: "Lập trình web",
    wed: "Lập trình web",
    thu: "Lập trình web",
    fri: "Chuyên Anh",
    sat: "",
    sun: "",
  },
  {
    time: "Ca sáng 1 (8h00-9h30)",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "Toán",
    sat: "Luyện thi toán",
    sun: "",
  },
  {
    time: "Ca sáng 2 (9h35-11h05)",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "Lý",
    sat: "Lý",
    sun: "",
  },
  {
    time: "Ca chiều (15h-16h30)",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "Thực hành Lý",
    sat: "Thực hành Lý",
    sun: "",
  },
];

export default function ScheduleTable() {
  return (
    <div className="container">
      <TextGenerateEffect
        words={"Thời khóa biểu"}
        className="text-center"
        textClassname="text-2xl lg:text-3xl capitalize"
      />

      <Table className="mt-14">
        <TableCaption>Thời khóa biểu tại AEC</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thời gian</TableHead>
            <TableHead>Hai</TableHead>
            <TableHead>Ba</TableHead>
            <TableHead>Tư</TableHead>
            <TableHead>Năm</TableHead>
            <TableHead>Sáu</TableHead>
            <TableHead>Bảy</TableHead>
            <TableHead>CN</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.mon}</TableCell>
              <TableCell>{row.tue}</TableCell>
              <TableCell>{row.wed}</TableCell>
              <TableCell>{row.thu}</TableCell>
              <TableCell>{row.fri}</TableCell>
              <TableCell>{row.sat}</TableCell>
              <TableCell>{row.sun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
