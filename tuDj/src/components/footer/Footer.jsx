import { useState } from "react"

export const Footer = () => {
  return (
    <footer className="h-150 flex justify-center bg-black text-white px-5">
      <div className="flex flex-row gap-20 mt-25">
        <div className="flex flex-col w-60.25 text-center">
            <span className="uppercase font-semibold text-[48px]">Consultas</span>
            <div className="text-justify">
              <span className="text-[14px]">Si tenés alguna consulta acerca de nuestros servicios, no dudes en llenar y enviar el siguiente formulario para que uno de nuestros integrantes del equipo se ponga en contacto con vos.</span>              
            </div>
        </div>    
        <ContactForm/>    
      </div>

    </footer>
  )
}

function ContactForm () {
  const[form ,setForm]=useState({
    nombre:"",
    telefono:"",
    email:"",
    consulta:""
  })

  const handleSubmit = () => {
    setForm()
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col w-60 gap-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold text-[19px]">Nombre</label>
            <input type="text" id="name" name="name" className="bg-white text-black p-1.5 rounded-sm"/>        
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="telefono" className="font-semibold text-[19px]">Teléfono</label>
            <input type="text" id="telefono" name="telefono" className="bg-white text-black p-1.5 rounded-sm"/>
          </div>
        </div>
        <div className="flex flex-col w-60 gap-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-[19px]">Email</label>
            <input type="email" id="email" name="email" className="bg-white text-black p-1.5 rounded-sm"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="consult" className="font-semibold text-[19px]">Consulta</label>
            <textarea id="consult" className="bg-white text-black p-1.5 rounded-sm" rows={5} cols={30}></textarea>
          </div>
        </div>
      </div>


      <button type="submit" className="bg-[#0088B2] p-2 w-25 rounded-full cursor-pointer">
        <span className="font-bold">Enviar</span>
      </button>
    </form>
  )
}