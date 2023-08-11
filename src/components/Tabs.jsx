"use client"
import React from "react"
import Link from "next/link"
import {useSearchParams} from 'next/navigation'

const Tabs=()=>{
    const searchParams= useSearchParams();
    var genre = searchParams.get('genre');
    if(genre!=null){
        genre= "/?genre="+genre;
    }
    else if(genre==null){
        genre='/'
    }

    const tabs=[
        {
            name:"Tüm Filmler",
            url:"/"
        },
        {
            name:"En Popüler",
            url:"/?genre=popular"
        },
        {
            name:"Yakında Gelicekler",
            url:"/?genre=upcoming"
        }
    ]

    return(
        <>
        <div className="p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
            
            {
                tabs.map((tab,i)=>(
                    <Link key={i} className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url===genre?"underline underline-offset-8 text-amber-600":""}`} href={`${tab.url}`}>{tab.name}</Link>
                ))
            }
        </div>
        </>
    )
}
export default Tabs