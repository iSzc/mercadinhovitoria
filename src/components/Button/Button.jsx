import { React } from "react";
import { motion } from "framer-motion";



function Button({ icon, text, color, url,  }) {
  const handleClick = () => {
    window.open(url.startsWith("http") ? url : `https://${url}`, "_blank")
  }


  return (
    <div className="md:w-[350px] md:h-[60px] h-[50px] flex">
        <motion.button
            whileHover={{ scale: 1.05 }}
            animate={{ scale: 0.95, opacity:1, x:0 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.3 }}
            onClick={handleClick}
            className={`flex items-center justify-around md:justify-start md:px-10 px-8 md:gap-x-8 gap-x-4 md:w-[350px] md:h-[60px] w-[200px] rounded-2xl text-black md:text-2xl text-md  font-bold text-shadow-md tansition ${color} font-[Lato] font-semibold hover:bg-[#f95e18] hover:border-2 hover:border-white cursor-pointer`}
        >
            <img
            src={icon}
            alt={text}
            className="md:w-10 md:h-10 w-8 h-8"
          />
          {text}
        </motion.button>
    </div>
  );
}

export default Button;