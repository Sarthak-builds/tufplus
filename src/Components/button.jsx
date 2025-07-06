import React from "react";
function Button ({text, icon}) {
    return (
        <button className="h-10 mr-2 min-w-30 px-4 mb-1 text-md font-semibold border-2 border-[#EA763F] hover:bg-orange-600  rounded-tl-2xl rounded-br-2xl rounded-md shadow-lg shadow-orange-600/10 text-white hover: duration-300 scale-75 sm:scale-100 backdrop-blur-3xl" >{text}
         {icon && <i className={`${icon} text-lg`}></i>}</button>
    )
}

export default Button;