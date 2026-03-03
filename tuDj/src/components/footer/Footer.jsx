import { useState } from "react";

export const Footer = () => {
  return (
    <footer className="h-auto lg:h-150 flex justify-center bg-black text-white px-5 py-12 lg:py-0 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-0 lg:mt-25 w-full max-w-lg lg:max-w-none items-center lg:items-start">
        <div className="flex flex-col w-full lg:w-60.25 text-center lg:text-left">
          <span className="uppercase font-semibold text-[32px] lg:text-[48px]">
            Consultas
          </span>
          <div className="text-justify mt-4 lg:mt-0">
            <span className="text-[15px] lg:text-[14px]">
              Si tenés alguna consulta acerca de nuestros servicios, no dudes en
              llenar y enviar el siguiente formulario para que uno de nuestros
              integrantes del equipo se ponga en contacto con vos.
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
};

function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    consulta: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log("Datos enviados:", form);
    // Lógica de envío acá...

    // Limpiar formulario si es necesario
    setForm({ nombre: "", telefono: "", email: "", consulta: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
        <div className="flex flex-col w-full lg:w-60 gap-6 lg:gap-10">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="nombre"
              className="font-semibold text-[17px] lg:text-[19px]"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              required
              value={form.nombre}
              name="nombre" // Cambiado de "name" a "nombre" para coincidir con el estado
              onChange={handleChange}
              className="bg-white text-black p-2 lg:p-1.5 rounded-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="telefono"
              className="font-semibold text-[17px] lg:text-[19px]"
            >
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              required
              value={form.telefono}
              name="telefono"
              onChange={handleChange}
              className="bg-white text-black p-2 lg:p-1.5 rounded-sm w-full"
            />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-60 gap-6 lg:gap-10">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-semibold text-[17px] lg:text-[19px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={form.email}
              name="email"
              onChange={handleChange}
              className="bg-white text-black p-2 lg:p-1.5 rounded-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="consulta"
              className="font-semibold text-[17px] lg:text-[19px]"
            >
              Consulta
            </label>
            <textarea
              id="consulta"
              required
              value={form.consulta}
              name="consulta" // Agregado para que funcione el handleChange
              onChange={handleChange}
              className="bg-white text-black p-2 lg:p-1.5 rounded-sm w-full resize-none lg:resize-y"
              rows={5}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center lg:justify-start">
        <button
          type="submit"
          className="bg-[#0088B2] p-3 lg:p-2 w-full lg:w-25 rounded-full cursor-pointer transition-colors hover:bg-[#006f94]"
        >
          <span className="font-bold text-white">Enviar</span>
        </button>
      </div>
    </form>
  );
}
