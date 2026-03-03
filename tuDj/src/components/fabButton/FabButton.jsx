import { useState, useEffect, useRef } from "react";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaUser,
  FaTimes,
} from "react-icons/fa";

export const FabButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div
      ref={modalRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
    >
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible mr-0.5"
            : "opacity-0 translate-y-10 invisible"
        }`}
      >
        <a
          href="https://wa.me/5491132022229"
          target="_blank"
          className="flex items-center gap-2 group"
        >
          <span className="bg-white text-gray-800 px-2 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp
          </span>
          <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <FaWhatsapp size={36} />
          </div>
        </a>

        <a
          href="https://www.instagram.com/tudj.arg/"
          target="_blank"
          className="flex items-center gap-2 group"
        >
          <span className="bg-white text-gray-800 px-2 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Instagram
          </span>
          <div className="w-16 h-16 bg-[linear-gradient(45deg,#405DE6,#833AB4,#C13584,#E1306C,#FD1D1D,#F56040,#F77737,#FCAF45,#FFDC80)] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <FaInstagram size={36} />
          </div>
        </a>

        <a href="#" className="flex items-center gap-2 group">
          <span className="bg-white text-gray-800 ml-6 px-2 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Tiktok
          </span>
          <div className="w-16 h-16 bg-black border border-white rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <AiFillTikTok size={36} />
          </div>
        </a>

        <a className="flex items-center gap-2 group pl-9">
          <span className="bg-white text-gray-800 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Correo
          </span>
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <FaEnvelope size={24} />
          </div>
        </a>
      </div>

      <button
        onClick={toggleMenu}
        className={`w-18 h-18 cursor-pointer rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 focus:outline-none ${
          isOpen ? "bg-red-500 rotate-90" : "bg-[#0088B2]"
        }`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaUser size={28} />}
      </button>
    </div>
  );
};
