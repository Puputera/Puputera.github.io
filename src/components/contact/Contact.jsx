import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Cilacap, Jawa Tengah",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "puputprima48@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="text-center">
            <p className="text-[35px] font-semibold text-[#132238]">
              Kontak Saya
            </p>
            <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg pt-4 font-normal text-soft-dark">
              Saya terbuka untuk peluang magang, proyek, atau kolaborasi. <br></br>
              Silakan hubungi saya
              melalui alamat email atau media sosial di bawah ini.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {addressData.map((item, index) => (
              <Address item={item} key={index} />
            ))}
          </div>

          <div className="w-full text-center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
