import React from "react";
import Button from "./button";
import {motion} from "motion/react";
 function PriceCard2 () {

    return (
        <motion.div className=" scale-75 sm:scale-90 overflow-hidden w-90 h-fit sm:h-170  rounded-3xl shadow-lg  ring-orange-400 bg-cover bg-center  relative p-5 flex flex-col justify-between border-1 opacity-0  bg-gradient-to-br from-black-800 to-gray-900 " whileHover= {{scale:1.05}} 
        transition= {{
            duration:0.3
        }} 
        whileInView={{ opacity: 1 }} 
        
        >
           <div  className="w-full h-50 bg-cover bg-center rounded-3xl  absolute top-0 left-0  bg-gradient-to-br from-white-800 to-black-900">
           </div> 

            <div className="flex flex-col gap-1 z-30 px-2 mt-2 text-gray-100">
                <h1 className="text-3xl"> 🔥Pinnacle Plan</h1>
                <h4 className="text-gray-300">Go all in- with extra supoort and lifetime access.</h4>
                
                {/* Pricing Section */}
                <div className="my-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400">Original</span>
                        <span className="text-gray-400 line-through">₹ 11999</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400">Regular</span>
                        <div className="flex items-center gap-2">
                            <span className="text-white text-xl">₹ 9120</span>
                            <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">24% OFF</span>
                        </div>
                    </div>
                    <div className="bg-orange-900 bg-opacity-30 p-3 rounded-lg mb-4">
                        <div className="text-white">
                            <span className="text-lg">Offer Price: </span>
                            <span className="text-orange-400 text-2xl font-bold">₹ 5928</span>
                        </div>
                        <div className="text-sm text-gray-300 mt-1">
                            Coupon: <span className="text-white font-semibold">PAYDAY</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300 mb-4">
                        <span>📅</span>
                        <span>Validity: Lifetime</span>
                    </div>
                </div>
                
                <h3 className="text-white text-lg font-semibold mb-3">What's included</h3>
            </div>
            
            <motion.ul className="px-4 flex flex-col gap-2 text-md text-gray-300 z-30">
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>All features</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Only DSA, Core & Aptitude</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span >AI Doubt Support</span>
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
                    Buy Now @ ₹5928
                </button>
            </div>
        </motion.div>
    )
 }
 export default PriceCard2