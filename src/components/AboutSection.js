import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles";
//framer motion
import {motion} from 'framer-motion'
import {titleAnim,fade,photoAnim} from "../animation"
import Wave from "./Wave";

function AboutSection() {


  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to Make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams </span>Come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us from any photography or videography ideas that you have.we
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt="gye" />
      </Image>
      <Wave/>
    </About>
  );
}



export default AboutSection;
