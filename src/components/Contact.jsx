import React, { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h4 className={styles.sectionHeadText}>Contact.</h4>

        <form ref={formRef} className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">Mobile</span>
            <span className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">
              +91-9636742866
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <a
              href="https://www.gmail.com"
              target="_blank"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small"
            >
              heisenberg96367@gmail.com
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/deepak-babani-2a3a521b1/"
              target="_blank"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            >
              deepak-babani
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">GitHub</span>
            <a
              href="https://github.com/Deepakbabani"
              target="_blank"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            >
              Deepakbabani
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

