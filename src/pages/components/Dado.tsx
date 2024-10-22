import closebtn from '../../../public/assets/icons8-fechar-janela-28.png'
import item from '../../../public/assets/lista.png'
import Image from "next/image";
export default function Dado(props:any) {

    function esconder() {
        let div:any = document.getElementById(props.identf)
        div.style.display = 'none'
    }

    return (
        <div id={props.identf} className="bg-gray-300 w-4/5 h-14 grid grid-cols-12 grid-rows-1">
            <Image src={item} alt='Item lista' width={32} height={32} className='col-start-1  w-8 h-8 ml-2 mt-[13px]'></Image>
            <h2 className='col-start-2 bg-slate-400 rounded-md h-10 mt-[8px] flex justify-center items-center'>{props.titulo}</h2>
            <p className='col-start-4 w-64 h-10 rounded-md bg-slate-400 mt-[8px] flex justify-center items-center'>{props.dados}</p>
            <Image onClick={esconder} src={closebtn} alt='Botão fechar' className='col-start-11 ml-8 mt-[14px] hover:cursor-pointer' width={28} height={28}></Image>
            <div className='h-full col-start-12'>
                <button className='bg-slate-500 h-1/2 ml-[13px] w-12 '>Cima</button>
                <button className='bg-slate-500 h-1/2 ml-[13px] w-12'>Baixo</button>
            </div>
        </div>
    );
}