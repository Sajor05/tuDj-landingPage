import "./Home.css";
import { Grids } from "./components/Grids";

export const Home = () => {
  return (
    <main className="bg-black h-670 lg:h-512.5 relative z-10">
      <div className="gradient absolute bottom-0 -top-150 left-0 w-full h-1/3 bg-linear-to-t from-[#ebebeb] to-transparent pointer-events-none"></div>
      <div className="text-white mt-3 flex justify-center">
        <Grids />
      </div>
      <SonidoProfesional />
      <Servicios />
    </main>
  );
};

const Servicios = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#F7931E] h-auto lg:h-101.5 items-center justify-center py-10 lg:py-0 gap-8 lg:gap-0">
      <div className="flex flex-col text-center font-semibold px-4 lg:px-0">
        <span className="text-[32px] lg:text-[48px] text-white leading-tight lg:leading-14.5 mb-2 lg:mb-0">
          Iluminación Profesional
        </span>
        <span className="text-[20px] lg:text-[36px] w-full max-w-sm lg:max-w-none lg:w-103 text-white ml-0 lg:ml-10 leading-snug lg:leading-10.75 mx-auto lg:mx-0">
          Efectos de luces, Ambientación y Programación DMX
        </span>
      </div>
      <img
        src="https://www.tudj.com.ar/images/sonidopro1.png"
        alt="sonido"
        className="w-3/4 max-w-75 h-auto lg:w-71.75 lg:h-71.5 object-contain"
      />
      <img
        src="https://www.tudj.com.ar/images/sonidopro2.png"
        alt="sonido2"
        className="w-3/4 max-w-75 h-auto lg:w-74.75 lg:h-72.75 object-contain"
      />
    </div>
  );
};

const SonidoProfesional = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-5 bg-[#22B573] h-auto lg:h-101.5 items-center justify-center py-10 lg:py-0 gap-8 lg:gap-0">
      <img
        src="https://www.tudj.com.ar/images/sonidopro1.png"
        alt="sonido"
        className="w-3/4 max-w-75 h-auto lg:w-71.75 lg:h-71.5 object-contain"
      />
      <img
        src="https://www.tudj.com.ar/images/sonidopro2.png"
        alt="sonido2"
        className="w-3/4 max-w-75 h-auto lg:w-74.75 lg:h-72.75 object-contain"
      />
      <div className="flex flex-col p-6 lg:p-10 text-center font-semibold">
        <span className="text-[32px] lg:text-[48px] text-white leading-tight lg:leading-14.5 mb-2 lg:mb-0">
          Sonido profesional
        </span>
        <div>
          <span className="text-[20px] lg:text-[30px] text-white leading-snug lg:leading-9">
            Eventos - Bandas - Fiestas
          </span>
        </div>
      </div>
    </div>
  );
};
