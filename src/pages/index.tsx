import Loading from "./components/Loading";
import Dado from "./components/Dado";
import Image from "next/image";
import localFont from "next/font/local";
import { use, useEffect,useState } from "react";
import cnpjimg from '../../public/assets/icones_350-x-350_px_final_05.png'
import { json } from "stream/consumers";


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


  var contres = 0


  const dimcnpj = 60 /* dimensões da imagem cnpj */
  
  useEffect( () => {
    loadingoff()
  },[])

  useEffect(() => {
    if (contres != 0) {
    let r = respost

    // setListitem([
    //   r.taxId,r.alias,r.founded,
    // ])

    // setKeyitem([
    //   'Id','Nome Fantasia','Data de criação',
    // ])

    let valorefemero: Array<string> =[]
    respost.company.members.forEach((element : any) => {
      valorefemero.push(element)
    });
    setItemmember(valorefemero)
  }
  },[respost])


  async function Buscarcnpj() {
    loadingon()
    let codigo:any = document.getElementById('pesquisa')
    codigo = codigo?.innerHTML
    codigo = '07526557011659'
    let caminho = `https://open.cnpja.com/office/${codigo}`
    let resp = await fetch(caminho)
    resp = await resp.json()
    console.log(resp)
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
    <div className="relative w-full flex justify-center items-start h-[100vh]">
      <Loading identf='Loader' />
      <div className="w-4/5 border border-black h-[600px] flex flex-col mt-12 items-center  ">
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

        <div className="flex flex-col justify-around items-center border border-black w-4/5 h-[530px]">
        <Dado dados={respost.taxIdid} identf='1' titulo='Id empresa' />
          <Dado dados={respost.alias} identf='2' titulo='Nome' />
          <Dado dados={respost.founded} identf="3" titulo="Fundada em"/>
          {/* corrigir este 3 componentes */}
        </div>

      </div>

    </div>
  );
}
