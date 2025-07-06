import { useState } from "react";
import {motion} from "motion/react";
const FaqContainer = () => {
    const[val,setVal] = useState(null); //for index logic

     const faqs = [
    {
      question: "What topics are covered in the DSA course?",
      answer:
        "Our DSA course covers everything from the basics to advanced topics, including hands-on problem-solving. You'll also have access to editorial videos and contests to deepen your understanding.",
    },
    {
      question: "Are there any prerequisites for enrolling in this course?",
      answer:
        "The only prerequisites are dedication and commitment. We'll take care of the rest, guiding you step by step through the course.",
    },
    {
      question: "Is the course content updated regularly?",
      answer:
        "Yes, we value user feedback immensely, as our customers are our top priority. If there's any issue or improvement needed, we make sure to update the content regularly to provide the best learning experience.",
    },
    {
      question: "Does your platform only provide answers, or does it also help with doubts and interview follow-ups?",
      answer:
        "Our platform goes beyond just providing answers. We offer a comprehensive approach to help you fully understand each concept. In addition to solutions, we address frequently occurring doubt(FODs), provide interview follow-ups(IFQ), and give hints for all problems. This ensures a deeper and better understanding of the questions.",
    },
    {
      question: "Can I get a sample lesson before purchasing?",
      answer:
        "You can explore our free platform, which includes a few features to give you a feel of the content. However, the experience is much smoother and more comprehensive when you dive into the premium courses on takeuforward.",
    },
  ];

    return (
        <motion.div className="w-190 sm:w-200  h-fit sm:h-120 px-60 sm:px-6 sm:p-6  opacity-0 " transition= {{
            duration:2
        }} whileInView={{ opacity: 1 }}>
            <h1 className="text-xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h1>
            <div className="w-full  h-fit flex flex-col gap-2 justify-center items-start  mt-5 "
            >
              {faqs.map((faq, index)=>{
               return ( <div key= {index} className=" w-full h-fit border-b border-gray-600  py-2 px-5 " 
               onClick={()=>setVal(val===index ? null: index)}> 
                    <div className=" flex justify-between"><h3 className=" sm:text-xl font-medium   text-gray-400 ">{faq.question}</h3><span className="text-2xl"> {val===index ?"-": "+"} </span></div>
                    {val===index && (<motion.p className="  sm:text-md pt-2"  initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}>{faq.answer}</motion.p>)}
                </div>
               )
               })}
            </div>
        </motion.div>
    )
}
export default FaqContainer;