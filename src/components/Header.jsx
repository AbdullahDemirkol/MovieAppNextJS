"use client"
import React, { useState } from "react"
import {BiSearch} from 'react-icons/bi'
import './MenuItem'
import MenuItem from "./MenuItem"
import ThemeComp from "./ThemeComp"
import { useRouter } from "next/navigation"

const Header=()=>{
    const [keyword, setKeyword]=useState('');
    const router=useRouter();
    const menu=[
        {
        name:"About",
        url:"/about"
        },
        {
            name:"Sign In",
            url:"/login"
        }
    ]
    const searchFunc=(e)=>{
        if((e.key==="Enter" || e.type=="click") && keyword.length>=3){
            router.push(`/search/${keyword}`)
            setKeyword('')
        }
    }
    return(
        <div className="flex items-center gap-7 h-20 p-5">
            <div onClick={()=>router.push(`/`)} className="bg-amber-400  rounded-lg p-3 text-2xl  cursor-pointer font-bold">MovieApp</div>
            <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
                <input value={keyword} onKeyDown={searchFunc} type="text" onChange={e=>setKeyword(e.target.value)} className="outline-none flex-1 bg-transparent" placeholder="Arama Yapınız..." />
                <BiSearch onClick={searchFunc} className="cursor-pointer" size={25}/>
            </div>
            <ThemeComp></ThemeComp>
            {
                menu.map((mn,i)=>(
                    <MenuItem mn={mn} key={i}/>
                ))
            }
        </div>
    )
}
export default Header