import React from 'react'
import style from './Heading.module.css'
import { motion } from 'framer-motion'

export default function Heading({textP,textH}) {
  return (
    <>
    <div className={style.Heading}>
        <div className={style.text}>
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}}>
            {textH}
            </motion.h2>
            <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}}>
            {textP}
            </motion.p>
        </div>



    </div>
    
    
    </>
  )
}
