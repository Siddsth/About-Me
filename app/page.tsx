import Image from "next/image";
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
  <div>
    
    <div className = "min-h-screen bg-[#0B0C10] flex items-center justify-center">
      <div className = "flex flex-col items-center gap-8">
      <div className="flex gap-6 items-stretch justify-center mt-6"><Navbar /></div>
        {/* Title of the page */}
        <h3 className = "text-5xl font-bold mt-10 text-center text-[#66FCF1]">
          About Me
        </h3>

        {/*card with depth */}
        <div className="
        bg-zinc-800
        max-w-xl w-full
        rounded-2xl
        p-8
        shadow-[0_20px_60px)rgba(0,0,0,0.6)]
        border border-zinc-700
        relative
        ">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-t-2xl"/>
           
            <p className="text-zinc-300 text-center leading-rekaxed text-lg">Hello my name is Siddhartha Shrestha 
              I am 21 years old i am a cs major i have hobbies like gaming and offroading
              <span className ="text-green-400 font medium"> gaming</span> and 
              <span className ="text-green-400 font medium"> offroading</span>

            </p>
        </div>
      </div>
    </div>
    </div>
  );
}
