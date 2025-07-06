import Button from "./button";
import {motion} from "motion/react";

 function Navbar () {
    return (
<motion.div className="w-full sm:mx-20 px-4 h-14 border-[#EA763F] border-b-4 border-e-4 rounded-br-lg rounded-tl-md  overflow-hidden text-white flex justify-between text-lg items-center -skew-x-20 backdrop-blur-lg bg-black/30 z-40 opacity-0" transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>

    <div className=" w-15 sm:w-20 h-full  text-center skew-x-20">
        <img className='py-4 pl-2' src="/tuflogo.png"></img>
    </div>

    <div className="w-fit max-h-fit skew-x-20 hidden sm:block">
        <ul className="flex  gap-10 justify-evenly items-center">
            <li className="hover:text-orange-400">Features</li>
            <li className="hover:text-orange-400">Courses</li>
             <li className="hover:text-orange-400"> Pricing</li>
            <li className="hover:text-orange-400">Resources<i class="ri-arrow-down-double-fill"></i></li>
        </ul>
    </div>

    <div className="flex justify-center items-center gap-2 sm:gap-5 skew-x-20">
        <i class="ri-sun-line"></i>
        <Button text="Login"></Button>
    </div>

</motion.div>
    )
}

export default Navbar;