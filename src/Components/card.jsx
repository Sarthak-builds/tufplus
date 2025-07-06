import React from "react";
import Button from "./button";
import Button2 from "./button2";
import {motion} from "motion/react";
function Card () {

    return (
        <motion.div className="w-[90%] h-110 bg-white/5 inset-shadow-lg  ring-white/40  rounded-xl opacity-0 text-white overflow-hidden 
        scale-90 sm:scale-100 "transition= {{
            duration:0.3
        }} whileInView={{ opacity: 1 }} whileHover= {{scale:1.05}}  >
         <div className=" flex flex-col justify-between pb-2">
           <div className="text-5xl w-full h-fit  px-5 bg-black border-b-1 border-gray-400 py-3"> <i class="ri-stack-fill"></i> <h1 className="text-xl font-semibold">Low Level Design (LLD)</h1>
           <p className="text-base">Level up LLD with video content on each concepts</p>
           </div>
            <div className="px-5 py-6 flex flex-col gap-2 justify-start  h-55 text-md">
          <p><i class="ri-arrow-right-s-fill"></i> 13+ Topics</p>
           <p><i class="ri-arrow-right-s-fill"></i> 46+ Problems</p>
            <p><i class="ri-arrow-right-s-fill"></i> 20+ Hours</p>
             
            </div >
            <span className="w-full text-center">
            <Button text="View Syllabus"></Button>
            </span>
         </div>
         
        </motion.div>
    )
}

export default Card;