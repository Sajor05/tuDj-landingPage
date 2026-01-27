import { useState } from 'react';
// Asegúrate de tener instalados los iconos: npm install react-icons
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPlus, FaTimes } from 'react-icons/fa';

export const FabButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      <div className={`flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
        }`}>
        
        <a 
          href="https://wa.me/5491132022228" 
          target="_blank"
          className="flex items-center gap-2 group"
        >
          <span className="bg-white text-gray-800 px-2 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp
          </span>
          <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <FaWhatsapp size={24} />
          </div>
        </a>

        <a 
          href="https://instagram.com/TU_USUARIO" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <span className="bg-white text-gray-800 px-2 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Instagram
          </span>
          <div className="w-12 h-12 bg-[#E1306C] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <FaInstagram size={24} />
          </div>
        </a>

        <a
          className="flex items-center gap-2 group"
        >
          <span className="bg-white text-gray-800 px-2 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Correo
          </span>
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <FaEnvelope size={20} />
          </div>
        </a>
      </div>

      <button 
        onClick={toggleMenu}
        className={`w-16 h-16 cursor-pointer rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 focus:outline-none ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-[#0088B2]'
        }`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaPlus size={28} />}
      </button>

    </div>
  );
};