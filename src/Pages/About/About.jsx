import React from "react";
import AboutTemplate from "../../Component/AboutTemplate/AboutTemplate";
import Heading from "../../Component/Heading/Heading";
import { motion } from "framer-motion";

export default function About() {
  return (
      <section id="About">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:1}}
         className="dots"/>
      <Heading textH={"About Us"} textP={"Who We Are"} />
      <AboutTemplate
        Image={{
          src: "https://cdn.izitechs.com/files/Alto/images/Banner 3.jpg",
          alt: "employee in his offices",
        }}
        Text={{
          text1: `ALTO is a global trade finance company that provides innovative financial solutions to businesses worldwide. We offer a wide range of trade finance services that help businesses grow and expand their operations.`,
          text2: `Our team of experts has years of experience in trade finance and international trade. We work with businesses of all sizes and industries to provide them with the financial solutions they need to succeed.`,
        }}
        html={null}
      />

      <Heading textH={"About Us"} textP={"Who We Work With"} />
      <AboutTemplate
        Image={{
          src: "https://cdn.izitechs.com/files/Alto/images/Banner%202.jpg",
          alt: "employee in his offices",
        }}
        Text={{
          text1: ` We work with small and large businesses across all industries. We offer all our clients, the individual attention and customized service that help them achieve their strategic goals.`,
          text2: `Partnering with ALTO you have a long-term dedicated partner who understands the importance of each trade transaction and its impact on the strategic goals of your business.`,
        }}
        html={<br />}
      />
    </section>
  );
}
