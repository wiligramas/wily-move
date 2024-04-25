import heroImg from "../assets/header.png"
import logoImg from "../assets/Logo.png"
export const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img 
        src={heroImg}
        alt="Imagem hero"
        className='top-0 left-0 w-full h-screen object-cover ' />     
    <div className="bg-black/60 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-16 left-6">
          <img
            src={logoImg}
            alt="Imagem logo"
            className="w-[215px] h-[89px]"
          />
      </div>    
        <div className="absolute top-0 w-full h-full justify-center flex flex-col text-white">
          <div className="md:left-36 max-w-[1440px] m-auto absolute p-4">
            <h1 className="text-left font-bold text-4xl drop-shadow-2xl text-wrap text-white pt-44">Mudar-se nunca foi tão facil antes</h1>              
            <h4 className="text-left max-w-[450px] drop-shadow-2xl pt-20 pb-10 text-2xl text-white">Ajuda você a planejar, reservar toda a sua mudança no conforto de sua casa</h4>
            <button className="bg-[#FF3800] justify-center text-center text-white">Faça um orçamento</button>
          </div>
        </div>
    </div>    
  )
}

