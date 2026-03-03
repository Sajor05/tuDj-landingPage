import "./Header.css";

export const Header = () => {
  return (
    <header className="headerBackground sticky top-0 -z-10 min-h-31.25 flex flex-col justify-center items-center lg:block">
      <div className="logo-container flex flex-col justify-center items-center bg-black w-50 h-45 lg:ml-108.5 lg:h-62 lg:w-67.75 lg:mt-0">
        <img
          src="https://www.tudj.com.ar/images/logotudj.jpg"
          alt="logo"
          className="w-25 h-25 lg:w-38 lg:h-38"
        />
      </div>

      <div className="w-50 py-2 lg:py-0 lg:ml-108.5 lg:w-67.75 lg:h-8.75 bg-[#646464] text-center flex items-center justify-center lg:block lg:pt-1">
        <p className="font-bold text-white text-[14px] lg:text-[18px]">
          Tu Magia. Tu Fiesta. Tu DJ !
        </p>
      </div>
    </header>
  );
};
