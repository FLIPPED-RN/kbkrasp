'use client'

import Image from "next/image"

export default function Header() {

    return (
        <div className="flex items-center justify-between mx-auto mt-7 border-[#d3d3d3] border px-5 rounded-2xl h-[120px] xs:w-[370px] xs:h-[80px] sm:w-[550px] sm:h-[110px] md:w-[750px] lg:w-[950px] lg:h-[150px] lg:px-9 xl:w-[1150px]">
            <div className="flex items-center gap-3">
                <Image
                    src={'/cloud-logo.jpg'}
                    width={100}
                    height={100}
                    alt="Логотип расписания"
                    className="xs:w-[70px] xs:h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px]"
                    priority
                />
                <h1 className="text-[18px] font-mono xs:hidden lg:block">
                    <span>Расписание </span>
                    <span className="text-[#FFF]">К</span>
                    <span className="text-[#FFF]">Б</span>
                    <span className="text-[#FFF]">К</span>
                </h1>
            </div>
            <div className="flex gap-7 items-center">
                <p className="font-mono xs:text-[10px] md:text-[16px] sm:text-[13px]">Версия 2.6</p>
                <a href="https://t.me/kbkraspsupport_bot"
                   className="text-2xl px-6 py-2 rounded-lg text-[#000000] bg-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff] transition-all delay-100 hover:border-[#e7e7e7] border border-[#ffffff] xs:text-[15px] xs:px-2 xs:py-[2px] sm:px-4 sm:py-1 md:text-xl md:py-3 md:px-6"
                >
                    Поддержка
                </a>
            </div>
        </div>
    )
}