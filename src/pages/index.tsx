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
      <div className="w-4/5 border border-black h-[600px]  mx-auto mt-[10vh]">
        <div className="bg-cyan-600 w-full h-16 flex items-center">
          <Image src={cnpjimg} alt="foto buscarcnpj" width={dimcnpj} height={dimcnpj} />
          <p className="ml-6 font-medium text-3xl text-white">Busca Cnpj</p>
        </div>

        </div>

        </div>
  );
}
