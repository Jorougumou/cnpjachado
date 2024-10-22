import Image from 'next/image';
import Loadingimg from '../../../public/assets/Loading.gif'

export default function (props:any) {
    const dimensoes = 100
    return (
        <div id={props.identf} className={"absolute flex justify-center items-center w-full h-[100vh] bg-[#4844445f]"}>
            <div className='bg-white w-96 mb-10 border-black border flex justify-center items-center flex-col' >
                <Image className='mt-8' src={Loadingimg} alt='Gif carregando' width={dimensoes} height={dimensoes}/>
                <p className='mt-10 text-4xl font-medium mb-4'>Carregando</p>
            </div>
        </div>
    );
}