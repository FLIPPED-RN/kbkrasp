import Image from "next/image"

export default function HappyOpen() {
    return(
        // <div className="flex flex-col xs:w-[370px] mx-auto sm:w-[550px] md:w-[750px] lg:w-[950px] xl:w-[1150px] text-center">
        //     {/* <h1 className="font-mono mx-auto text-2xl xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px]">Все новости сайта здесь</h1> */}
        //     <a href="https://t.me/kbk_rasp" className="font-mono mx-auto text-center mb-10 px-10 py-3 text-[18px] border border-[#6e2fba] rounded-lg transition-all hover:border-[#fff] hover:text-[#6e2fba] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] flex items-center gap-[20px]">
        //         Наш официальный канаЛ
        //     </a> 
        // </div>
        <div className="flex flex-col xs:w-[370px] mx-auto sm:w-[550px] md:w-[750px] lg:w-[950px] xl:w-[1150px] text-center">
            <p className="font-mono mb-6 ">Вы можете поддержать наш проект</p>
            <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=12J2PH3MCHH.240507&" width="330" height="50" frameborder="0" allowtransparency="true" scrolling="no" className="mx-auto mb-6"></iframe>​
        </div>
    )
}