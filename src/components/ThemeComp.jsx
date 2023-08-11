"use client"
import {CiDark, CiLight} from "react-icons/ci"
import React,{useEffect, useState} from "react"
import {useTheme} from 'next-themes'
const ThemeComp=()=>{
    const [mounted, setMounted]= useState(false)
    const{ systemTheme ,theme, setTheme } = useTheme()
    useEffect(()=>{
        setMounted(true)
    }, [])
    
    const themeMode= theme==="system"? systemTheme:theme


    return(
        <div>
            {
                mounted &&(
                    themeMode==="dark"?
                        <CiLight onClick={()=>setTheme('light')} className="cursor-pointer" size={25}></CiLight>:
                        <CiDark onClick={()=>setTheme('dark')}  className="cursor-pointer" size={25}></CiDark>
                )
            }
        </div>
    )
}
export default ThemeComp