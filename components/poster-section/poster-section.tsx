import Image from "next/image";
import React from "react";

const images = [
  {
    src: "/assets/math-poster-1.jpg",
    alt: "math",
    title: "Toán",
  },
  {
    src: "/assets/math-poster-2.jpg",
    alt: "math",
    title: "Toán",
  },
  {
    src: "/assets/math-poster-3.jpg",
    alt: "math",
    title: "Toán",
  },
  {
    src: "/assets/math-poster-4.jpg",
    alt: "math",
    title: "Toán",
  },
  {
    src: "/assets/math-poster-5.jpg",
    alt: "math",
    title: "Toán",
  },

  {
    src: "/assets/present-poster-1.jpg",
    alt: "present",
    title: "Kĩ năng thuyết trình",
  },
  {
    src: "/assets/present-poster-2.jpg",
    alt: "present",
    title: "Kĩ năng thuyết trình",
  },

  {
    src: "/assets/literature-poster-1.jpg",
    alt: "literature",
    title: "Văn",
  },
  {
    src: "/assets/literature-poster-2.jpg",
    alt: "literature",
    title: "Văn",
  },
  {
    src: "/assets/literature-poster-3.jpg",
    alt: "literature",
    title: "Văn",
  },
  {
    src: "/assets/literature-poster-4.jpg",
    alt: "literature",
    title: "Văn",
  },
  {
    src: "/assets/literature-poster-5.jpg",
    alt: "literature",
    title: "Văn",
  },

  {
    src: "/assets/english-poster-1.jpg",
    alt: "english",
    title: "English",
  },
  {
    src: "/assets/english-poster-2.jpg",
    alt: "english",
    title: "English",
  },
  {
    src: "/assets/english-poster-3.jpg",
    alt: "english",
    title: "English",
  },
  {
    src: "/assets/english-poster-4.jpg",
    alt: "english",
    title: "English",
  },
  {
    src: "/assets/english-poster-5.jpg",
    alt: "english",
    title: "English",
  },

  {
    src: "/assets/it-poster-1.jpg",
    alt: "Frontend",
    title: "Lập trình web",
  },
  {
    src: "/assets/it-poster-2.jpg",
    alt: "Frontend",
    title: "Lập trình web",
  },
  {
    src: "/assets/it-poster-3.jpg",
    alt: "Frontend",
    title: "Lập trình web",
  },
  {
    src: "/assets/it-poster-4.jpg",
    alt: "Frontend",
    title: "Lập trình web",
  },

  {
    src: "/assets/physic-poster-1.jpg",
    alt: "Physic",
    title: "Vật lý",
  },
  {
    src: "/assets/physic-poster-2.jpg",
    alt: "Physic",
    title: "Vật lý",
  },
  {
    src: "/assets/physic-poster-3.jpg",
    alt: "Physic",
    title: "Vật lý",
  },

  {
    src: "/assets/chemistry-poster-1.jpg",
    alt: "Chemistry",
    title: "Hoá",
  },
  {
    src: "/assets/chemistry-poster-2.jpg",
    alt: "Chemistry",
    title: "Hoá",
  },
];

const PosterSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {images.map((image) => (
          <div key={image.src}>
            <Image
              alt={image.alt}
              src={image.src}
              width={320}
              height={300}
              className="rounded-md h-[400px] w-full"
            />
            <h4 className="text-sm font-bold mt-3 text-center">
              {image.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosterSection;
