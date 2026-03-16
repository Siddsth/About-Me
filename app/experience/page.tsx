"use client"

import React from 'react';

interface pageProps {
}


const page = ({}: pageProps): JSX.Element => {
    return (    <div className = "min-h-screen bg-[#0B0C10] flex items-center justify-center">

        <div className = "min-h-screen bg-[#0B0C10] flex items-center justify-center">

        <div className="
        bg-zinc-800
        max-w-xl w-full
        rounded-2xl
        p-8
        shadow-[0_20px_60px,rgba(0,0,0,0.6)]
        border border-zinc-700
        relative
        ">
           <h1 className="text-green-400 leading-relaxed text-lg mb-0.5">Professional Experience: </h1>
            <p className="text-zinc-300 leading-relaxed text-lg mb-8">
            I am currently working at Home Depot in Euless, Texas as a Bookkeeper and Sales Associate since 2022, where I manage financial records, cash reconciliation, and banking coordination. I have also completed a virtual internship at Cuvasol Technologies in India, where I was involved in <span className="text-gray-500">debugging and testing software</span> before public release and building <span className="text-gray-500">Flutter applications focused on virtual interview experiences</span>.
            </p>
            
            <h1 className="text-green-400 leading-relaxed text-lg mb-0.5">Projects & Skills: </h1>
            <p className="text-zinc-300  leading-relaxed text-lg">
            On the technical side, I have worked on a multi-developer Flutter application where I reproduced bugs, traced logic errors, and validated program output through edge-case analysis. I have also built personal projects focused on data structures and algorithm optimization, comparing iterative and recursive solutions to evaluate performance and memory tradeoffs. My core languages include <span className="text-gray-500">C++, Java, Python, SQL, and JavaScript</span>.
            </p>
        </div>
        </div>
        </div>
    
);
}


export default page;