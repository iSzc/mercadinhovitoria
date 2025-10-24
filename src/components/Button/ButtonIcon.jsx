import { React } from "react";
import { motion } from "framer-motion";

function ButtonIcon({ icon, text, url }) {
    const handleClick = () => {
        window.open(url.startsWith("http") ? url : `https://${url}`, "_blank")
    }


    return (
        <div>
            <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            onClick={handleClick}
            className="h-10 w-10 cursor-pointer"
            >
                <img 
                src={icon} 
                alt={text} 
                />{text}
            </motion.button>
        </div>

    )



}

export default ButtonIcon;