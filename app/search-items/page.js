import Image from "next/image"

export default function SearchItems() {
    return(
        <div className="grid items-center justify-center mt-[100px] text-3xl font-mono">
            <Image 
                src="/rasp-logo.jpg"
                height={200}
                width={200}
                alt="logo rasp"
            />
            <h1 className="">В разработке :)</h1>
        </div>
    )
}