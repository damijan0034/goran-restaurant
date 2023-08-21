import { featuredProducts } from "@/data"
import Image from "next/image"

export default function Featured() {
  return (
    // SCROLL
    <div className="w-full overflow-x-scroll  ">
        {/*WRAPPER*/} 
        <div className="flex w-max">
            {
                featuredProducts.map(item=>(
                    // SINGLE ITEM
            <div className="flex flex-col h-[60vh] w-[100vw] md:w-[50vw]
            lg:w-[33vw] hover:bg-fuchsia-50 transition-all duration-500
            ">
                {/*IMAGE CONTAINER*/} 
                {
                    item.img &&
                    <div className="relative flex-1 w-full h-1/2 items-center
                    
                    ">
                    <Image src={item.img} alt="img" fill
                    className="object-contain py-2 hover:rotate-[60deg]
                    transition-all duration-300
                    "
                    />
                    </div>
                }
               
                 {/*TEXT CONTAINER*/} 
                <div className="flex-1 flex flex-col text-center h-full
                 text-red-500 gap-2">
                    <h1 className="text-xl uppercase font-bold">
                        {item.title}</h1>
                    <p className="p-2">{item.desc}</p>
                    <span className="font-bold">{item.price}</span>
                    <button className="bg-red-500 text-white
                    w-[90%] py-2 rounded-md mx-auto
                    ">
                        Add To Cart</button>
                </div>

            <div>

            </div>
            </div>
                ))
            }
        
        </div>
    </div>
    
  )
}
