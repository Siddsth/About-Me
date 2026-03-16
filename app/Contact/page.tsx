"use client"

import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


interface pageProps {
}


const page = ({}: pageProps): JSX.Element => {
    return (    
        <div>
        <div className = "min-h-screen bg-[#0B0C10] flex flex-col items-center">
                
        <div className="flex text-left mt-40 mb-0 w-full max-w-xl">
            <h1 className="text-green-400 text-4xl text-left font-mono">Contact Me</h1>
        </div>
        
        <div className = "min-h-screen bg-[#0B0C10] flex flex-col items-center mt-15">
        
        <div className="
        bg-zinc-800
        max-w-xl w-full
        rounded-2xl
        p-8
        shadow-[0_20px_60px,rgba(0,0,0,0.6)]
        border border-zinc-700
        relative
        ">
            <div className="flex gap-3 mb-3">
           <FaGithub size={30} className="text-white" />
           <a href="https://github.com/Siddsth" target="_blank"className ="text-green-400 text-2xl hover:text-green-800">
           github.com/Siddsth
            </a>
            </div>

            <div className="flex gap-3 mb-3">
                <CiLinkedin size={30} className="text-white" />

                <a href="https://www.linkedin.com/in/siddhartha-shrestha-7627722ab/" target ="_blank" className ="text-green-400 text-2xl hover:text-green-800">
                    linkedin/Siddhartha-Shrestha
                </a>
            </div>

            <div className="flex gap-3 mb-3">
            <MdEmail size={30} className="text-white" />
            <a href="mailto:siddhusth@gmail.com" target="_blank" className ="text-green-400 text-2xl hover:text-green-800">
            siddhusth@gmail.com
            </a>

            </div>


        </div>
        </div>
        </div>
        </div>
    
);
}


export default page;