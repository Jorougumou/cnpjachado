import Loading from "./components/Loading";
import Dado from "./components/Dado";
import Image from "next/image";
import localFont from "next/font/local";
import { use, useEffect,useState } from "react";
import cnpjimg from '../../public/assets/icones_350-x-350_px_final_05.png'
import { json } from "stream/consumers";
var estadoresp = false


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
  const [respost,setRespost] = useState<any>()
  const [listitem,setListitem] = useState<any>()
  const [keyitem,setKeyitem] = useState<object>()
  const [itemmember,setItemmember] = useState<object>()





  const dimcnpj = 60 /* dimensões da imagem cnpj */
  
  useEffect( () => {
    loadingoff()
  },[])

  useEffect(() => {
     try {
      let comp1:any = document.getElementById(respost.taxId)
      let comp2:any = document.getElementById(respost.company.name)
      let comp3:any = document.getElementById(respost.founded)
      let comp4:any = document.getElementById(respost.mainActivity.text)
      comp1.style.display = "grid" 
      comp2.style.display = "grid"
      comp3.style.display = "grid"
      comp4.style.display = "grid"

     } catch (error) {
      console.log(error)
      
     }
  },[respost])


  async function Buscarcnpj() {
    loadingon()
    let codigo = (document.getElementById('pesquisa') as HTMLInputElement).value
      
    let caminho = `https://open.cnpja.com/office/${codigo}`
    let resp:any = await fetch(caminho)
    resp = await resp.json()
    estadoresp = true
    setRespost(resp)
    loadingoff()
   
   
  }

  function loadingon() {
    let carregador :any = document.getElementById('Loader')
    carregador.style.display = 'flex'
  }
  function loadingoff() {
    
  let carregador :any = document.getElementById('Loader')
    carregador.style.display = 'none'
  }


  return (
    <div className="relative  w-full flex justify-center items-start h-[100vh]">
      <Loading identf='Loader' />
      <div id="corpo" className="w-4/5 bg-gray-200 flex flex-col mt-12 items-center h-[700px] ">
        <div className=" bg-cyan-600 w-full h-16 flex justify-around items-center">
          <div className="flex items-center ml-6">
            <Image  src={cnpjimg} alt="foto buscarcnpj" width={dimcnpj} height={dimcnpj} />
            <p className="ml-4 font-medium text-3xl text-white">Busca Cnpj</p>
          </div>
          <div className="bg-white flex w-72 h-10 ml-60 ">
            <input id='pesquisa' className="h-full w-4/5" type="text" />
            <button onClick={Buscarcnpj} className="bg-slate-500 w-2/5 h-10 text-white hover:bg-slate-600">Pesquisar</button>
          </div>
        </div>

        <div className="flex flex-col  justify-around items-center  w-full ">
          {estadoresp !=false&&(
          <>
            <Dado dados={respost.taxId} identf={respost.taxId} titulo='Id empresa' />
            <Dado dados={respost.company.name} identf={respost.company.name} titulo='Nome' />
            <Dado dados={respost.founded} identf={respost.founded} titulo="Fundada em"/>
            <Dado dados={respost.mainActivity.text} identf={respost.mainActivity.text} titulo="Atividade principal"/>
            <Dado dados={respost.company.size.text} identf={respost.company.size.text} titulo="tamanho"/>
          
          </>
          )}
        </div>

      </div>

    </div>
  );
}
