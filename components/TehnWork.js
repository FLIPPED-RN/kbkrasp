import Image from "next/image"

export default function TehnWork() {
    return(
        <>
            <div className="fixed inset-0 z-[1000]" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
            <div className="fixed inset-0 flex items-center justify-center z-[1001]">
                <div className="text-center flex flex-col justify-center bg-black items-center xs:px-[55px] xs:py-[40px] lg:px-[140px] lg:py-[60px] border border-[#6e2fba] rounded-xl gap-5">
                    <Image 
                        src={'/rasplogo-tehn.jpg'}
                        width={100}
                        height={100}
                        alt="Картинка Zrfir с инструментом"
                    />
                    <h1>Технические работы :)</h1>
                    <p>Подробности в телеграмме: <a href="https://t.me/kbk_rasp" className="text-[#6e2fba] font-bold">ТЫК :)</a></p>
                </div>
            </div>
        </>
    )
}
