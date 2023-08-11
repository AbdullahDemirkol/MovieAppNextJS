"use client"
import { useRouter } from "next/navigation"
import React from "react"

const Movies=({dt})=>{
    const router=useRouter();

    return(
        dt?.backdrop_path!=null && dt?.vote_average!=null && dt?.release_date!=null && dt?.title?
        <div onClick={()=>router.push(`/movie/${dt?.id}`)}  className="imgContainer relative">
            <img alt="" width={400} height={300}  src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path ||dt?.poster_path}`} />
            <div className="absolute w-full h-full bottom-0 top-0 right-0 left-0  opacity-0  hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex justify-end">
                    <div className="pt-1 pr-1">
                        <div className="hover:opacity-75 transition-opacity bg-amber-400 p-2 rounded-lg " >IMDB: {dt?.vote_average.toFixed(1)}</div>

                    </div>
                </div>
                <div className="absolute black-border-text bottom-0 left-0 p-5 ">
                        <div className="text-2xl  font-bold">
                            {dt?.title}
                        </div>
                        <div className="tracking-[.05em]">{dt?.release_date}</div>
                </div>
            </div>
        </div> :
        <div className="hidden"></div>
    )
}
export default Movies