import { Grids } from "./components/Grids"

export const Home = () => {
  return (
    <main className="bg-black h-512.5">
        <div className="text-white  flex justify-center">
            <Grids/>
        </div>
        <div className="flex mt-5 bg-[#22B573] h-101.5 items-center justify-center">
            <img src="https://www.tudj.com.ar/images/sonidopro1.png" alt="sonido" className="w-71.75 h-71.5" />
            <img src="https://www.tudj.com.ar/images/sonidopro2.png" alt="sonido2" className="w-74.75 h-72.75" />
            <div className="flex flex-col p-10 text-center font-semibold">
                <span className="text-[48px] text-white leading-14.5">Sonido profesional</span>
                <div>
                    <span className="text-[30px] text-white leading-9">Eventos - Bandas - Fiestas</span>
                </div>
                
            </div>
        </div>
        <div className="flex bg-[#F7931E] h-101.5 items-center justify-center">
            <div className="flex flex-col text-center font-semibold">
                <span className="text-[48px] text-white leading-14.5">Iluminación Profesional</span>                    
                <span className="text-[36px] w-103 text-white ml-10 leading-10.75">Efectos de luces, Ambientación y Programación DMX</span>
            </div>
            <img src="https://www.tudj.com.ar/images/sonidopro1.png" alt="sonido" className="w-71.75 h-71.5" />
            <img src="https://www.tudj.com.ar/images/sonidopro2.png" alt="sonido2" className="w-74.75 h-72.75" />
        </div>
    </main>
  )
}