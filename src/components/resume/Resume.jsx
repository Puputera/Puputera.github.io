import Projects from "./Projects";

const projectData = [
  {
    id: 1,
    category: "Politeknik Negeri Cilacap",
    title: "D3 Teknik Informatika",
    description:
      "Mempelajari beberapa bahasa pemrograman dan mengerjakan berbagai proyek berbasis web maupun desktop sebagai bagian dari tugas kuliah.",
  },
  {
    id: 2,
    category: "SEVEN INC",
    title: "Fullstack Developer Intern",
    description:
      "Membangun website bersama tim menggunakan framework laravel dan flowbite, berkolaborasi tim menggunakan git dan github. Menjadi mentor mengenai dasar html, css, dan laravel.",
  },
  {
    id: 3,
    category: "Coding Camp Powered by DBS Foundation",
    title: "Frotend Backend Developer",
    description:
      "Mengikuti pelatihan intensif untuk melatih soft skill dan hard skill, mengerjakan modul pembelajaran mengenai pengembangan website dan membuat proyek tugas akhir berupa website dengan tema yang dipilih.",
  },
  {
    id: 4,
    category: "PROTIC 2022 - 2024",
    title: "Sekretaris",
    description:
      "Membuat dan menyimpan arsip dokumen yang dibutuhkan organisasi, mencatat notulensi dan daftar kehadiran selama kegiatan berlangsung.",
  },
  {
    id: 5,
    category: "JKB Learning Center 2024",
    title: "Sekretaris",
    description:
      "Membuat dan menyimpan arsip dokumen yang dibutuhkan organisasi, mencatat notulensi dan daftar kehadiran selama kegiatan berlangsung.",
    link: "#!",
  },
  {
    id: 6,
    category: "IFEST 2023",
    title: "Sekretaris",
    description:
      "Membuat dan menyimpan arsip dokumen yang dibutuhkan organisasi, mencatat notulensi dan daftar kehadiran selama kegiatan berlangsung.",
  },
];

const Resume = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="resume"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Resume</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Berikut pendidikan yang telah saya tempuh dan pengalaman yang saya dapatkan.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
