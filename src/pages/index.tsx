import Loading from "./components/Loading";
import Image from "next/image";
import localFont from "next/font/local";
import { useEffect,useState } from "react";
import cnpjimg from '../../public/assets/icones_350-x-350_px_final_05.png'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const dimcnpj = 60
  useEffect(() => {
    let carregador :any = document.getElementById('Loader')
    carregador.style.display = 'none'
  },[])

  return (
    <div className="relative">
      <Loading identf='Loader' />
      <div className="w-4/5 border border-black h-[600px] flex flex-col  items-center  mx-auto mt-[10vh]">
        <div className=" bg-cyan-600 w-full h-16 flex justify-around items-center">
          <div className="flex items-center ml-6">
            <Image  src={cnpjimg} alt="foto buscarcnpj" width={dimcnpj} height={dimcnpj} />
            <p className="ml-4 font-medium text-3xl text-white">Busca Cnpj</p>
          </div>
          <form className="bg-white w-72 h-10 ml-60 ">
            <input className="h-full" type="text" />
          </form>
        </div>

        <div className="border border-black w-4/5 h-[530px]">
          
        </div>

      </div>

    </div>
  );
}
