import React from "react"
import Image from "next/image"
import Link from "next/link";

const getMovie=async(id)=>{
    const result=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b37c04a4e6a0f68c76efea44c1f4c273`);
    return await result.json();
}


const page=async({params})=>{
    const id=params.id;
    const movieDetail=await getMovie(id);
  return(
        <div className=" tracking-[.05em] relative p-7 min-h-screen">
            <Image fill priority alt="" src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path ||movieDetail?.poster_path}`}/>
            <div className="absolute">
                <div className='black-border-text text-4xl font-bold my-3'>{movieDetail?.title}</div>
                <div className="black-border-text w-1/2">{movieDetail?.overview}</div>
                <div className="black-border-text my-3">{movieDetail?.release_date}</div>
                <div className="black-border-text my-3">IMDB: {movieDetail?.vote_average}</div>
                <div className="p-2 my-2 border w-32 rounded-md bg-black text-white hover:bg-white hover:text-black  text-center text-lg cursor-pointer">
                    <Link href={movieDetail.homepage}>Fragman</Link>
                </div>
            </div>
        </div>
    )
}
export default page