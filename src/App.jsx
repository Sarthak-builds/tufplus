import React from "react"
import Navbar from "./Components/navbar"
import Button from "./Components/button"
import Button2 from "./Components/button2"
import Card from "./Components/card"
import PriceCard1 from "./Components/pricecard"
import PriceCard2 from "./Components/pricecard2"
import PriceCard3 from "./Components/pricecard3"
import FaqContainer from "./Components/faq"
import Scroll from "./Components/scroll"
import {motion} from "motion/react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PromoBanner from "./Components/promo"




function App() {
 

  
  return (
  (
  <div className="min-h-screen w-full relative z-20 font-first ">
    <div className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 90% 40% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 40%), black",
      }}
    />
    {
  <div className="-h-screen w-full relative flex  flex-col justify-center items-center  z-20 overflow-hidden">
     <div className="flex justify-center flex-col items-center z-20 ">

    <motion.div className="w-full h-15 bg-black fixed top-0 left-0 z-30  text-white text-center opacity-0"  whileInView={{ opacity: 1 }} transition={{duration:0.5, delay:0.5, ease:"easeIn"}} ><PromoBanner></PromoBanner></motion.div>

    <div className="w-full h-fit flex justify-center items-center py-1 fixed top-11 z-40 outline-none ">
    <Navbar></Navbar>
    </div>
    <Hero></Hero>
    <div>
    <Syllabus></Syllabus>
    </div>
    
      <VideoSection></VideoSection>
    
    <div>
    <Tareefein></Tareefein>
    </div>
    <div>
    <PriceSection></PriceSection>
    </div>
    {/* <div className=" w-full px-30 py-10 flex justify-center">
      <div className=" w-fit bg-orange-500  px-40  inset-shadow-sm inset-shadow-white/80 py-10 rounded-md text-white">
      Got any doubts or interested in a plan?
      </div>
    </div> */}
   
     </div> 
     {/* extra features  */}
     <motion.div className="w-full h-fit b my-10 flex justify-evenly   gap-5 flex-col items-center sm:px-15 opacity-0" transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
      <h1 className=" text-lg sm:text-4xl text-gray-200 font-semibold">Compare what you learn 🧲</h1>
      <div className=" w-full h-full text-white flex-col flex items-center  gap-2  rounded-xl border-gray-400 p-4 sm:p-8 bg-gray-700/20">
       <div className="flex  sm:text-3xl justify-between p-2 not-last:gap-14 text-start w-full font-semibold font-third   border-b-1 border-gray-400">
        <h1 className="w-full ">Features</h1>
       <h1 className="w-full">TUF</h1>
       <h1 className="w-full"> Other Platforms</h1>
       </div>
       <div className="w-full grid grid-cols-3 justify-center gap-20 sm:text-lg text-gray-400">
        <div className="w-full flex flex-col gap-4 p-1 ">
          <p>DSA (Basics to Advanced)</p>
          <p>Live Content</p>
          <p>Recorded Content</p>
          <p>DSA (Pattern Wise)</p>
          <p>1000+ Practice Problems</p>
          <p>Customised Roadmap</p>
          <p>Course + Platform</p>
          <p>Notes Downloader to Google Docs</p>
        </div>
         <div className="w-fit flex flex-col gap-5 sm:gap-4 text-md">
          <p>Yes (Curated list of beginners with practice set)</p>
          <p>No (Too crowded and chaotic)</p>
          <p>Yes (Broken down to smaller parts to save time)</p>
          <p>yes</p>
         <p>yes</p>
         <p>yes</p>
         <p>yes</p>
         <p>yes</p>
        </div>
         <div className="w-fit flex flex-col gap-10 sm:gap-4 ">
        <p>yes</p>
        <p>yes</p>
        <p>yes</p>
        <p>No</p>
        <p>No (Apart from very low)</p>
        <p>No</p>
        <p>No ( Aprt from few dead ones)</p>
        <p>No</p>
        </div>
        </div>
      </div>
     </motion.div>
     {/* extra features khtm */}
     {/* faq */}
       <div className="w-full sm:h-120 flex sm:flex-row flex-col justify-center items-center  text-white sm:gap-14   px-35 border-r-1">
        <div className=" flex-col justify-center items-start w-100  h-full sm:text-lg text-start  px-6 py-4 border-l-2 border-t-2 rounded-xl border-gray-800 mt-15 sm:mt-0 hidden sm:flex">
          <a className="hover:border-2 px-4 py-2 rounded-xl border-orange-400 hover:bg-slate-800">Course Content and Curriculum</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Account Management</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Course Access and Technical Support</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Mentorship and Community Support</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Certification and Completion</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Career Guidance</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800"> Internships and Job Assistance</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Payment and Refunds</a>
        </div>
        <div>
        <FaqContainer></FaqContainer>
        </div>
        </div>
     {/* faq wala */}
    <div className="w-full text-center h-fit flex flex-col justify-center items-center py-7 border-gray-500 mt-15 text-white gap-5 border-t-1">
       <div className=" px-5 sm:px-30 flex flex-col gap-2 justify-center items-center"><img src="/tuflogo.png" className="w-30"></img> 
       <p>The best place to learn data Structures, algorithms, most asked coding interview questions. real interview experiences free of cost.</p>
       </div>
    
      <Footer></Footer>
      <div className="sm:px-30 px-18 flex flex-col gap-2 justify-center items-center py-5 border-t-1">
       <p>Copyright © 2025 takeuforward | All rights reserved</p>
       </div>

    </div>
</div>
/* Your Content/Components */}
  </div>
    
  )
  )
}


function Hero () {
  return (
    <motion.div className=" h-200 w-screen  text-white px-7  sm:px-10  flex flex-col sm:flex-row justify-between items-center  z-0   pt-30 opacity-0" transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
     <div className=" h-full w-full flex flex-col justify-center gap-8   sm:pl-5 items-start text-center sm:text-start" >
       <button className=" w-fit border-gray-2 rounded-full px-4 py-2 inset-shadow-sm inset-shadow-orange-600/50 self-center  scale-75 sm:scale-110">Crafted By Top Engineers 🔥</button>
      <div> <h1 className=" text-3xl/10 sm:text-6xl/18   text-gray-200 ">
Upskill yourself
With Just
One <span className="text-orange-400">SUBSCRIPTION.</span></h1>
     <p className=" sm:text-xl px-4 text-gray-300">The most trusted platform for engineers to upskill and crack tech
interviews in the least time</p></div>
      <div>
       <Button text="Explore Offerings " icon="ri-arrow-down-double-line" ></Button>
        <Button2 text="Buy Now"></Button2>
      </div>
     </div>
     <div className=" w-120 sm:h-full sm:w-full sm:p-13 relative">
      {/* <motion.button className="w-fit px-4 " drag>DSA</motion.button> */}
     <DotLottieReact
      src="https://lottie.host/6b775f6b-a116-4fd2-a7db-d23ce0dcca0a/w9hHQFfXYX.lottie"
      loop
      autoplay
    />
</div>
   </motion.div>
  )
}
export default App


function Syllabus () {
  return (
  <motion.div className="w-full h-fit py-8  flex-col flex justify-center items-center  px-60 sm:px-30  border-white gap-12 opacity-0" transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
     <h1 className="  sm:text-4xl text-gray-200 font-semibold">Everything You Need to Crack Interviews 🚀</h1>
     <div className="w-fit  grid grid-cols-2 sm:flex sm:justify-center sm:items-center
     sm:gap-6  py-3 sm:px-4 sm:py-4 rounded-xl inset-shadow-sm inset-shadow-orange-900/50 ">
      <Button text="DSA"></Button>
      <Button2 text="System Design"></Button2>
      <Button text="OOPs"></Button>
      <Button text="SQL"></Button>
      <Button text="Aptitude"></Button>
     </div>
     <div className=" max-w-screen h-fit grid grid-cols-1 sm:grid-cols-4 gap-3 px-10 justify-items-center">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
  </motion.div>
)
}


function PriceSection () {
  return (
<div className="h-fit text-white px-50  text-center  pt-30 pb-0 w-full flex flex-col justify-between items-center ">
 <div className="flex flex-col gap-5 justify-center items-center">
    <h1 className="text-xl sm:text-4xl text-gray-200 font-semibold">Affordable Plans for Everyone 😇 </h1>
   <p className="w-80 sm:w-full sm:text-2xl text-gray-300">Master DSA, System Design, and more with curated resources tailored for top tech companies.</p>
 </div>
 <div className="sm:flex  sm:flex-row sm:gap-12  h-fit">
   <PriceCard1></PriceCard1>
    <PriceCard2></PriceCard2>
     <PriceCard3></PriceCard3>
 </div>
</div>
  )}

  function Footer () {
    return (<div className="flex justify-between w-full sm:px-55 py-10 scale-80 sm:scale-100 gap-2 sm:gap-0 ">
      <div className="flex flex-col gap-1 ">
        <a className="text-orange-400">Company</a>
        <a className="hover:text-orange-400">About us</a>
        <a className="hover:text-orange-400">Contact us</a>
        <a className="hover:text-orange-400">Pricing</a>
        <a className="hover:text-orange-400">Privacy Policy</a>
        <a className="hover:text-orange-400">Terms and Conditions</a>
        <a className="hover:text-orange-400">Cancellation / Refund policy</a>
      </div>
      <div className="flex flex-col gap-1">
        <a className="text-orange-400">Quick Access</a>
        <a className="hover:text-orange-400">Striver's DSA Sheet</a>
        <a className="hover:text-orange-400">Technical Blogs</a>
        <a className="hover:text-orange-400">CS Subjects</a>
        <a className="hover:text-orange-400">Striver's CP Sheet</a>
      </div>
      <div className="flex flex-col gap-1">
        <a className="text-orange-400">DSA Sheets</a>
        <a className="hover:text-orange-400">Striver's SDE Sheet</a>
        <a className="hover:text-orange-400">Striver's A2Z DSA Playlist</a>
        <a className="hover:text-orange-400">SDE Core Sheet</a>
        <a className="hover:text-orange-400">Striver's CP Sheet</a>
      </div>
      <div className="flex flex-col gap-1">
        <a className="text-orange-400">DSA Playlist</a>
        <a className="hover:text-orange-400">Array Series</a>
        <a className="hover:text-orange-400">Graph Series</a>
        <a className="hover:text-orange-400">DP Series</a>
        <a className="hover:text-orange-400">LinkedList Series</a>
      </div>
    </div>)
  }

  function Tareefein () {
  return (
  <motion.div className="w-full h-fit mt-30  flex-col flex justify-center items-center px-30  border-white  gap-8 sm:gap-12 opacity-0" transition= {{
            duration:1
        }} whileInView={{ opacity: 1 }}>
     <h1 className="  w-80 sm:w-full text-center sm:text-4xl text-gray-200 font-semibold">What users have to say about the V3 launch of TUF+ 🥰</h1>
     <Scroll></Scroll>
    
  </motion.div>
)
}

function VideoSection () {

  return (
     <motion.div className="w-full h-120 flex flex-col scale-65 sm:scale-100 sm:flex-row justify-center items-center  text-white gap-14   py-4 px-35 border-r-1 opacity-0" transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
        <div className="flex flex-col justify-center items-start w-100  h-full text-lg text-start  px-6 py-4 border-l-2 border-t-2 rounded-xl border-gray-800">
           <a className=" px-4 py-3 rounded-xl text-3xl text-orange-400 ">Features ⚡</a>
          <a className="hover:border-2 px-4 py-2 rounded-xl border-orange-400 hover:bg-slate-800">Course Content and Curriculum</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Account Management</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Course Access and Technical Support</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Mentorship and Community Support</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Certification and Completion</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Career Guidance</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800"> Internships and Job Assistance</a>
          <a className="hover:border-2 px-4 py-2 rounded-md border-orange-400 hover:bg-slate-800">Payment and Refunds</a>
        </div>
        <div className="w-200 flex items-center">
        <video className="w-full h-80 sm:h-100 md:h-110 rounded-lg shadow-orange-500/50 shadow-lg" type="video/mp4"  autoPlay muted loop>
          <source src="/tufvideo.mp4" type="video/mp4" />
          <source src="/tufvideo.webm" type="video/webm" />
        </video>
        </div>
        </motion.div>
        
  )
}