import ImagenSetsi from "../components/ImagenSetsi";
import { motion } from 'framer-motion';
import Buttons from "../components/Buttons";
import ShowMore from "../components/ShowMore";

const Welcome = () => {
    
    return(
        <div>
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-[#0a1128] pt-20">
        <motion.div
          className="mx-auto items-center justify-center text-center text-[#fefcfb]"
          initial={{ y: -100, scale: 2, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-bold">I'm Omar Aliaga</h1>
          <p className="mt-4 text-1xl text-[#fefcfb]">Fullstack & data science developer</p>
        </motion.div>

        <Buttons/>
        <ShowMore />


      </section>


    </div>
            
    )
}

export default Welcome;