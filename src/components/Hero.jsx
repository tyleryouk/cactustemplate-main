import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[60px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#991b1b]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-red-800 via-yellow-600 to-yellow-500" />

          {/* animated mover  */}
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-red-800 flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-red-800 mb-1"
                />
              </div>
            </a>
          </div>
          {/* animated mover end */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Template <span className="text-white">Space</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Click the monitor below <br className="sm:block hidden" />
            for a 360 view
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
