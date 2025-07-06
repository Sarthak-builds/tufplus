import {motion} from "motion/react"

function Scroll () {
    // Create your images array
    const images = [
       "/scroll1.png",
       "/scroll2.png",
       "/scroll3.png",
       "/scroll4.png",
       "/scroll1.png",
       "/scroll2.png",
       "/scroll3.png",
       "/scroll4.png",
       "/scroll1.png",
       "/scroll2.png",
       "/scroll3.png",
       "/scroll4.png",
        // Add more image paths as needed
    ];

    // Calculate the width of one complete set (number of images × 160px each)
    const singleSetWidth = images.length * 160;

    return (
        <motion.div 
            className="w-full h-fit relative grid grid-flow-col-dense" 
            animate={{x: -singleSetWidth}} 
            transition={{
                duration: 60, 
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }}
        >
            {/* Render the images twice for seamless looping */}
            {[...images, ...images].map((imageSrc, index) => (
                <div 
                    key={index} 
                    className="min-w-100 h-fit "
                >
                    <img 
                        src={imageSrc} 
                        className=" object-contain px-5 border-2 rounded-2xl"
                    />
                </div>
            ))}
        </motion.div>
    )
}

export default Scroll;