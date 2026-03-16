import Image from "next/image";
import Navbar from "@/app/components/Navbar"

export default function Home() {
  return (
  <div>
    
    <div className = "min-h-screen bg-[#0B0C10] flex  justify-center">
      <div className = "flex flex-col items-center gap-8">
        {/* Title of the page */}
        <h3 className = "text-5xl font-bold mt-10 flex text-left  mb-0 w-full max-w-xl text-green-400 font-mono">
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
           
            <p className="text-zinc-300 leading-rekaxed text-lg mb-6">
              I am Siddhartha Shrestha, a 21 year old originally from Nepal who moved to Texas three years ago.
               I am currently studying Computer Science and working toward building a career as a Full Stack Developer. 
               When I am not coding, you will find me deep in a story driven game hunting trophies in Elden Ring, optimizing every detail in Satisfactory, or binge reading manga, manhwa, and keeping up with the latest anime.

            </p>
            <p className="text-zinc-300 leading-rekaxed text-lg">
              I am just as passionate about life off the screen as I am on it. 
              I love cars — from attending local car meets to taking my truck offroading on trails. 
              Long drives and travelling abroad are some of my favorite ways to recharge. 
              I am someone who loves to explore, whether that is a new country, a new trail, or a new open world game. 
              I moved halfway across the world at 18 and that experience taught me to adapt quickly, embrace challenges, and always keep pushing forward.</p>
        </div>
      </div>
    </div>
    </div>
  );
}
