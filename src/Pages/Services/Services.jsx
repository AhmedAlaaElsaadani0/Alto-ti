import React from 'react'
import Heading from '../../Component/Heading/Heading'
import OurServices from '../../Component/OurServices/OurServices'
import { motion } from 'framer-motion'
export default function Services() {
  return (
    <section id='Services'>
      <motion.div  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:1}}
       className="dots">

      </motion.div>
      <Heading textH={'Services'} textP={'What We Offer'} />
      <OurServices/>

    </section>
  )
}
