export const Grids = () => {
  return (
    <div className="flex flex-col gap-5 mt-7 w-full px-2 lg:px-0 lg:w-261 mx-auto overflow-hidden">
      <EventGrid />
      <DjGrid />
      <ServiceGrid />
      <DjsGrid />
      <GaleryGrid />
    </div>
  );
};

const EventGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1fr_514px] justify-between gap-2 lg:gap-0">
      <div className="bg-[url(https://www.tudj.com.ar/images/eventos-u347-fr.jpg)] w-full h-32 lg:w-127.5 lg:h-42.25 bg-center bg-cover bg-no-repeat z-18" />
      <div className=" bg-[#FBB03B] w-full h-32 lg:h-auto lg:w-128.5 flex justify-center items-center cursor-pointer group">
        <span className="uppercase font-semibold text-2xl lg:text-[60px] text-white transition-transform duration-300 ease-out group-hover:scale-110 lg:group-hover:scale-125 group-hover:font-bold">
          eventos
        </span>
      </div>
    </div>
  );
};

const DjGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[372px_1fr_1fr] gap-2 lg:gap-3">
      <div className=" bg-[#0071BC] h-32 lg:h-auto flex justify-center items-center cursor-pointer group">
        <span className="uppercase font-semibold text-2xl lg:text-[60px] text-white transition-transform duration-300 ease-out group-hover:scale-110 lg:group-hover:scale-125 group-hover:font-bold text-center">
          dj pro
        </span>
      </div>
      <div className="bg-[url(https://www.tudj.com.ar/images/discjay-u356-fr.jpg)] w-full h-32 lg:w-163 lg:h-52 bg-center bg-cover bg-no-repeat z-18 lg:col-span-2" />
    </div>
  );
};

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[718px_1fr] gap-2 lg:gap-3">
      <div className="bg-[url(https://www.tudj.com.ar/images/slide06.jpg)] w-full h-32 lg:h-50 bg-center lg:bg-top-left bg-cover lg:bg-auto bg-no-repeat z-18" />
      <div className=" bg-[#00A99D] w-full h-32 lg:h-auto lg:w-76.25 flex justify-center items-center text-center cursor-pointer group px-2">
        <span className="uppercase font-semibold text-lg lg:text-[36px] text-white transition-transform duration-300 ease-out w-full lg:w-50 group-hover:scale-110 lg:group-hover:scale-125 group-hover:font-bold leading-tight">
          todos nuestros servicios
        </span>
      </div>
    </div>
  );
};

const DjsGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[319px_364px_319px] gap-2 lg:gap-5 h-auto lg:h-61.25 lg:justify-center">
      <div className=" bg-[#D4145A] items-center flex justify-center cursor-pointer h-40 lg:h-auto py-2 lg:py-0">
        <img
          src="https://www.tudj.com.ar/images/djdamian.png"
          alt="djdamian"
          className="h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className=" bg-[#D4145A] h-28 lg:h-50 flex justify-center items-center cursor-pointer group">
          <span className="uppercase font-semibold text-3xl lg:text-[60px] text-white transition-transform duration-300 ease-out group-hover:scale-110 lg:group-hover:scale-125 group-hover:font-bold">
            ¡tu dj!
          </span>
        </div>
        <div className="flex-1 lg:h-11.25 bg-[#7F7F7F] flex justify-center items-center p-2 lg:p-0">
          <span className="uppercase text-[#B4B4B4] font-semibold text-sm lg:text-[30px]">
            Contactate
          </span>
        </div>
      </div>
      <div className=" bg-[#D4145A] items-center flex justify-center cursor-pointer h-40 lg:h-auto py-2 lg:py-0 col-span-2 lg:col-span-1">
        <img
          src="https://www.tudj.com.ar/images/djsoledaad.png"
          alt="djsoledaad"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
};

const GaleryGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[441px_600px] h-auto lg:h-72 gap-2 lg:gap-0 cursor-pointer lg:justify-center">
      <img
        src="https://www.tudj.com.ar/images/fotogaleria.png"
        alt="galeria"
        className="w-full h-40 lg:w-110.25 lg:h-72 object-cover"
      />
      <div className="flex justify-center items-center bg-[#29ABE2] group py-4 lg:py-0">
        <div className="flex flex-col text-center px-2">
          <span className="uppercase font-semibold text-2xl lg:text-[48px] text-white transition-transform duration-300 ease-out group-hover:scale-110 lg:group-hover:scale-125 group-hover:font-bold lg:mt-8 mb-1 lg:mb-0">
            galeria
          </span>
          <p className="font-light uppercase text-[10px] lg:text-base text-white transition-transform duration-300 ease-out group-hover:scale-95 lg:group-hover:scale-75 group-hover:font-semibold leading-tight">
            Mirá algunas de nuestras fotos y videos de eventos realizados.
          </p>
        </div>
      </div>
    </div>
  );
};
