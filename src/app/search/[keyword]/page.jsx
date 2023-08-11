import React from "react"
import Movies from "@/components/Movies";

const getMovie=async(keyword)=>{
    const result=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b37c04a4e6a0f68c76efea44c1f4c273&query=${keyword}&language=en-US&include_adult=false`);
    return await result.json();
}


const page=async({params})=>{
    const keyword=params.keyword;
    const movies=await getMovie(keyword);
    var hasPicture=false;
    movies.results.forEach(result => {
        if(result.backdrop_path!=null){
            hasPicture=true;
        }
    });


  return(
    <div>
        {
            movies.total_results==0 || !hasPicture? 
            <div className="flex justify-center  p-5">Aranılan Film Bulunamadı...</div> :
            
            <div className="flex items-center justify-center flex-wrap gap-3 p-5">
                {
                  movies?.results?.map((dt,i)=>(
                    <Movies key={i} dt={dt}/>
                  ))
                }
            </div>
                
        }
    </div>
    )
}
export default page