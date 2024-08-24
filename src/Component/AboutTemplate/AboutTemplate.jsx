import React from "react";
import style from "./AboutTemplate.module.css";
import { motion } from "framer-motion";

export default function AboutTemplate({Image,Text,html}) {
  return (
    <div className="container">
      <div className={style.grid}>
        <div className={style.Image}>
            <div className={style.black_bg}>

            </div>
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7,delay:0}} src={Image.src} alt={Image.alt} />
            <div className={style.dots}>

            </div>
        </div>
        <div className={style.text}>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}}>
         {Text.text1}
         {html}
         {Text.text2}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
