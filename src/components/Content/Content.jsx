import logo from "../../assets/logoW.png";
import { motion } from "framer-motion"
import Button from "../Button/Button";
import ButtonIcon from "../Button/ButtonIcon"
import appleIcon from "../../assets/appleLogo.png";
import androidIcon from "../../assets/androidLogo.png";
import wppIcon from "../../assets/whatsappLogo.png";
import faceIcon from "../../assets/faceLogo.png"
import instaIcon from "../../assets/InstaLogo.png"


function Content() {
  return (
    <main className="bg-[linear-gradient(150deg,#ff6a12_20%,#e8292b_100%)] xl:h-screen 2xl:h-[100%] sm:h-auto sm:w-screen flex justify-center items-center">
      <div className="sm:w-full flex flex-col justify-center items-center gap-y-6">
        <motion.div className="sm:h-[40%] w-auto flex justify-center mt-6">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            src={logo}
            alt="Logo Mercado Vitória"
            className="w-[400px] md:w-sm"
          />
        </motion.div>
        <div className="flex justify-center items-center w-screen px-5">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="lg:text-5xl md:text-5xl sm:text-4xl text-[30px] text-center lg:w-1/2 sm:text-center font-[karla] text-[#ffffff] font-semibold text-shadow-lg"
          >
            O delivery mais rápido da região.<br/>Faça já o seu pedido.
          </motion.h1>
        </div>
        <div className="flex flex-col items-center gap-4 justify-center mb-10">
          <Button
            icon={appleIcon}
            text="Baixe no iOS"
            color="bg-white"
            url="https://apps.apple.com/br/app/mercado-vitória/id6738929275"
          />
          <Button
            icon={androidIcon}
            text="Baixe no Android"
            color="bg-white"
            url="https://play.google.com/store/apps/details?id=com.VRSoft.G928"
          />
          <Button
            icon={wppIcon}
            text="Nosso Whatsapp"
            color="bg-white"
            url="https://api.whatsapp.com/message/BGZGPS2VPMSQK1?autoload=1&app_absent=0"
          />
        </div>
        <div className="flex justify-center items-center mb-17 md:mb-12 gap-x-5 2xl:h-screen">
          <ButtonIcon
          icon={faceIcon}
          url="https://www.facebook.com/mercadinhovitoria.online/?ref=pl_edit_xav_ig_profile_page_web"
          />
          <ButtonIcon
          icon={instaIcon}
          url="https://www.facebook.com/mercadinhovitoria.online/?ref=pl_edit_xav_ig_profile_page_web"
          />
        </div>
      </div>
    </main>
  )
}

export default Content;