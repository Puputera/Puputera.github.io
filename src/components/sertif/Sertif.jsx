import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MonoSertif from "./MonoSertif";

const custom_breakpoints = {
  640: { slidesPerView: 2, spaceBetween: 15 },
  768: { slidesPerView: 3, spaceBetween: 15 },
  1220: { slidesPerView: 4, spaceBetween: 24 },
};

export const sertifData = [
  {
    id: 1,
    title: "Coding Camp Powered by DBS Foundation",
    link: "/sertif/sertifikat_11.pdf",
    date: "Juli 2025",
  },
  {
    id: 2,
    title: "Pengembang Web Pratama",
    link: "/sertif/sertifikat_12.pdf",
    date: "Oktober 2023",
  },
  {
    id: 3,
    title: "Belajar Backend Pemula dengan Javascript",
    link: "/sertif/sertifikat_1.pdf",
    date: "Mei 2025",
  },
  {
    id: 4,
    title: "Belajar Pengembangan Web Intermediate",
    link: "/sertif/sertifikat_2.pdf",
    date: "Mei 2025",
  },
  {
    id: 5,
    title: "Financial Literacy 101",
    link: "/sertif/sertifikat_3.pdf",
    date: "April 2025",
  },
  {
    id: 6,
    title: "Belajar Fundamental Frontend Web Development",
    link: "/sertif/sertifikat_4.pdf",
    date: "April 2025",
  },
  {
    id: 7,
    title: "Belajar Membuat Frontend Web untuk Pemula",
    link: "/sertif/sertifikat_5.pdf",
    date: "Maret 2025",
  },
  {
    id: 8,
    title: "Belajar Pemprograman Javascript",
    link: "/sertif/sertifikat_6.pdf",
    date: "Februari 2025",
  },
  {
    id: 9,
    title: "Belajar Dasar Pemprograman Web",
    link: "/sertif/sertifikat_7.pdf",
    date: "Februari 2025",
  },
  {
    id: 10,
    title: "Belajar Dasar Git dengan Github",
    link: "/sertif/sertifikat_8.pdf",
    date: "Februari 2025",
  },
  {
    id: 11,
    title: "Pengenalan Logika Pemprograman",
    link: "/sertif/sertifikat_9.pdf",
    date: "Februari 2025",
  },
  {
    id: 12,
    title: "Memulai dasar pemrograman untuk menjadi Pengembang Software",
    link: "/sertif/sertifikat_10.pdf",
    date: "Februari 2025",
  },
  {
    id: 13,
    title: "English for Business Communication",
    link: "/sertif/sertifikat_13.pdf",
    date: "Juni 2025",
  },
];

const Sertif = () => {
  return (
    <div className="content py-25 px-2 relative" id="sertifikat">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Sertifikat Kompetensi</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Berikut beberapa sertifikat yang telah saya raih dalam pengembangan website:
        </p>
      </div>

      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {sertifData.map((data, index) => (
          <SwiperSlide key={index} className="mb-10">
            <MonoSertif data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sertif;
