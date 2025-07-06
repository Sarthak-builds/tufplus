import React from "react";
import Button from "./button";
import {motion} from "motion/react";
 function PriceCard3 () {

    return (
        <motion.div className="scale-75 sm:scale-90 overflow-hidden w-90 h-fit sm:h-170 gap-20 sm:gap-0  rounded-3xl shadow-lg  ring-orange-400 bg-cover bg-center  relative p-5 flex flex-col justify-between border-1 opacity-0  bg-gradient-to-br from-black-800 to-gray-900" whileHover= {{scale:1.05}} 
        transition= {{
            duration:0.3
        }} 
        whileInView={{ opacity: 1 }} 
        
        >
           <div  className="w-full h-50 bg-cover bg-center rounded-3xl  absolute top-0 left-0  bg-gradient-to-br from-white-800 to-black-900">
           </div> 

            <div className="flex flex-col gap-1 z-30 px-2 mt-2 text-gray-100">
                <h1 className="text-3xl"> 🎯Enterprise Plan</h1>
                <h4 className="text-gray-300">Perfect for a group of people (min 30) who are looking for an extra discount</h4>
                
                
                   
                <h3 className="text-white text-lg font-semibold mb-3">What's included</h3>
            </div>
            
            <motion.ul className="px-4 flex flex-col gap-2 text-xl text-start text-gray-300 z-30">
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>All features of Pinnacle</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Performance Dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span >Centralised Billing and licensing</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span >Biweekly Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span >Code Review</span>
                </li>
            </motion.ul>
            
            <div className="z-30 mt-4">
                <button className="w-full bg-transparent border-2 border-orange-400 text-orange-400 py-3 px-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200 font-medium">
                    Contact Us
                </button>
            </div>
        </motion.div>
    )
 }
 export default PriceCard3