import "./Header.css"

export const Header = () => {
  return (
    <>
      <header className="headerBackground sticky top-0 -z-10 min-h-125">
        <div className="logo-container flex flex-col justify-center items-center bg-black ml-108.5 h-62 w-67.75">
          <img 
            src="https://www.tudj.com.ar/images/logotudj.jpg" 
            alt="logo"
            className="w-38 h-38"
          />
        </div>
        <div className="ml-108.5 w-67.75 h-8.75 bg-[#646464] text-center pt-1">
          <p className="font-bold text-white text-[18px]">Tu Magia. Tu Fiesta. Tu DJ !</p>
        </div>
      </header> 
    </>













  )
}
