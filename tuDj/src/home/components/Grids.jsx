export const Grids = () => {
    return(
        <div className="flex flex-col gap-5 mt-7 w-261 mx-auto">
            <EventGrid/>
            <DjGrid/>
            <ServiceGrid/>
            <DjsGrid/>
            <GaleryGrid/>
        </div>
    )
}

const EventGrid = () => {
    return(
        <div className="grid grid-cols-[1fr_514px] justify-between">
            <div className="bg-[url(https://www.tudj.com.ar/images/eventos-u347-fr.jpg)] w-127.5 h-42.25 bg-center bg-cover bg-no-repeat z-18" />
            <div className=" bg-[#FBB03B] w-128.5 flex justify-center items-center cursor-pointer group">
                <span className="uppercase font-semibold text-[60px] text-white transition-transform duration-300 ease-out group-hover:scale-125 group-hover:font-bold">eventos</span>
            </div>
        </div>
    )
}

const DjGrid = () => {
    return(
        <div className="grid grid-cols-[372px_1fr_1fr] gap-3">
            <div className=" bg-[#0071BC] flex justify-center items-center cursor-pointer group">
                <span className="uppercase font-semibold text-[60px] text-white transition-transform duration-300 ease-out group-hover:scale-125 group-hover:font-bold">dj pro</span>
            </div>
            <div className="bg-[url(https://www.tudj.com.ar/images/discjay-u356-fr.jpg)] w-163 h-52 bg-center bg-cover bg-no-repeat z-18" />
        </div>
    )
}

const ServiceGrid = () => {
    return(
        <div className="grid grid-cols-[718px_1fr] gap-3">
            <div className="bg-[url(https://www.tudj.com.ar/images/slide06.jpg)] h-50 bg-top-left bg-no-repeat z-18" />
            <div className=" bg-[#00A99D] w-76.25 flex justify-center items-center text-center cursor-pointer group">
                <span className="uppercase font-semibold text-[36px] text-white
                     transition-transform duration-300 ease-out w-50
                     group-hover:scale-125 group-hover:font-bold">
                    todos nuestros servicios
                </span>
            </div>
        </div>
    )
}

const DjsGrid = () => {
    return(
        <div className="grid grid-cols-[319px_364px_319px] gap-5  h-61.25">
            <div className=" bg-[#D4145A] items-center flex justify-center cursor-pointer">
                <img src="https://www.tudj.com.ar/images/djdamian.png" alt="djdamian" />
            </div>
            <div>
                <div className=" bg-[#D4145A] h-50 flex justify-center items-center cursor-pointer group">
                    <span className="uppercase font-semibold text-[60px] text-white
                        transition-transform duration-300 ease-out 
                        group-hover:scale-125 group-hover:font-bold">
                        ¡tu dj!
                    </span>
                </div>
                <div className="h-11.25 bg-[#7F7F7F] flex justify-center items-center">
                    <span className="uppercase text-[#B4B4B4] font-semibold text-[30px]">Contactate</span>
                </div>
            </div>

            <div className=" bg-[#D4145A] items-center flex justify-center cursor-pointer">
                <img src="https://www.tudj.com.ar/images/djsoledaad.png" alt="djsoledaad" />
            </div>
        </div>
    )
}

const GaleryGrid = () => {
    return(
        <div className="grid grid-cols-[441px_600px] h-72 cursor-pointer">
            <img src="https://www.tudj.com.ar/images/fotogaleria.png" alt="galeria" className="w-110.25 h-72" />
            <div className="flex justify-center bg-[#29ABE2] group">
                <div className="flex flex-col text-center">
                    <span className="uppercase font-semibold text-[48px] text-white transition-transform duration-300 ease-out group-hover:scale-125 group-hover:font-bold mt-8">galeria</span>
                    <p className="font-light uppercase text-white transition-transform duration-300 ease-out group-hover:scale-75 group-hover:font-semibold">Mirá algunas de nuestras fotos y videos de eventos realizados.</p>
                </div>
            </div>
        </div>
    )
}