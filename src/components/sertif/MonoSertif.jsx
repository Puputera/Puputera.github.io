import { pdfjs, Document, Page } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
const MonoSertif = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <div className="w-full h-56 overflow-auto">
        <Document file={data?.link}>
          <Page pageNumber={1} width={300} />
        </Document>
      </div>
      <div className="m-6">
        <p className="text-[10px] xs:text-[14px] font-normal text-gray-400">
          {data?.date}
        </p>
        <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
          {data?.title.length > 40
            ? `${data?.title.slice(0, 40)}...`
            : data?.title}
        </p>
        <a
          href={data?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-xs mt-2 inline-block hover:underline"
        >
          Lihat Sertifikat
        </a>
      </div>
    </div>
  );
};

export default MonoSertif;
