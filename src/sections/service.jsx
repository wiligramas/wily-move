import phoneCall  from "../assets/phone-call.svg" 
import shield  from "../assets/shield.svg"
import dollarSign  from "../assets/dollar-sign.svg"
export const Service = () => {
  return (
    <div className="pt-12 text-center bg-[#E6E6E6]">
        <div className="p-2.5">
            <p className="text-lg text-[#FF3800] ">Nossos serviços</p>
            <h2 className="text-4xl text-[#191414]">Serviço personalizado</h2>
        </div>
         
        <div className="pt-10">
          <div className="px-52 mx-auto flex justify-between items-center gap-5">
            <div className="h-[442px] shadow-2xl flex flex-col p-4 my-4 rounded-none hover:scale-105 duration-300  bg-white w-[342px]">
              <img 
                className="w-24 pt-8 pb-10 mx-auto bg-white"
                src={phoneCall} 
                alt="celular"              
                />    
                <h5 className="font-bold text-xl text-center pb-8 px-0 ">Atendimento personalizado</h5>
                <p className="text-base text-center pb-32 px-0">Reserva simples online. economize tempo e aborrecimento sem visitas domiciliares</p>
            </div>

            <div className="h-[442px] w- shadow-2xl flex flex-col p-4 my-4 rounded-none hover:scale-105 duration-300  bg-white w-[342px]">
              <img 
                className="w-24 pt-8 pb-8 mx-auto bg-white"
                src={shield} 
                alt="proteção"              
                />    
                <h5 className="font-bold text-xl text-center pb-8 px-2 ">Transporte com seguro premium</h5>
                <p className="text-base text-center pb-32 px-0">Oferecemos os melhores seguros do mercado. Cada um de nossos movimentos é coberto por um transporte premium abrangente</p>
            </div>

            <div className="h-[442px] shadow-2xl flex flex-col p-4 my-4 rounded-none hover:scale-105 duration-300  bg-white w-[342px]">
              <img 
                className="w-24 pt-8 pb-10 mx-auto bg-white"
                src={dollarSign} 
                alt="dinheiro"              
                />    
                <h5 className="font-bold text-xl text-center pb-8 px-2 ">Totalmente transparente</h5>
                <p className="text-base text-center pb-32 px-4">Preços transparentes para todos os serviços. Não precisa ser caro. Nós sabemos</p>
            </div>
          </div>
        </div>
    </div>
  )
}