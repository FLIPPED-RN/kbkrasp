import Image from "next/image"

export default function HappyOpen() {
    return(
        <div className="flex flex-col xs:w-[370px] mx-auto sm:w-[550px] md:w-[750px] lg:w-[950px] xl:w-[1150px] text-center">
            {/* <h1 className="font-mono mx-auto text-2xl xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px]">Все новости сайта ждесь</h1> */}
            <a href="https://t.me/kbk_rasp" className="font-mono mx-auto text-center mb-10 px-10 py-3 text-[18px] border border-[#6e2fba] rounded-lg transition-all hover:border-[#fff] hover:text-[#6e2fba] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] flex items-center gap-[20px]">
                 <Image 
                    src={'/magnit-ras.jpg'}
                    width={30}
                    height={30}
                    alt="магнитола"
                 />
                 Новости
                 <Image 
                    src={'/magnit-ras.jpg'}
                    width={30}
                    height={30}
                    alt="магнитола"
                 />
            </a> 
        </div>
    )
}