import Image from "next/image"

export default function SearchItems() {
    return(
        <div className="grid items-center justify-center mt-[100px] text-3xl font-mono border border-[#6e2fba] xs:w-[370px] mx-auto sm:w-[550px] md:w-[750px] lg:w-[950px] xl:w-[1150px] rounded-2xl py-5">
            <Image 
                src="/magnit-ras.jpg"
                height={200}
                width={200}
                alt="logo rasp"
                className="xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px]"
            />
            <h1 className="xs:text-[12px] text-center sm:text-[16px] md:text-[20px]">В разработке...</h1>
        </div>
    )
}