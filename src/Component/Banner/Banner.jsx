import React, { useContext, useState } from "react";
import style from "./Banner.module.css";
import { IsMobileContext } from "../../Utilities/isMobileContext";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { motion } from "framer-motion";

export default function Banner() {
  const { isMobile } = useContext(IsMobileContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div  className={style.banner}>
      <Swiper
        slidesPerView={1}
        style={{ height: "100%" }}
        modules={[Thumbs,Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{delay:5000}}
        loop={true}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <div className={style.bannerImage}>
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:0}} src="https://cdn.izitechs.com/files/Alto/images/Banner 2.jpg" alt="Banner" />
          </div>
          <div className={style.layer}>
            <div className="container">
              <div className={style.bannerText}>
                <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}}>Expert Guidance for Your Growth Trajectory</motion.h2>
                <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7,staggerChildren:0.25}}>Tailored Supply Chain Analysis</motion.p>
                <motion.a initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}} href="#Contact">Contact Us</motion.a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className={style.bannerImage}>
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:0}} src="https://cdn.izitechs.com/files/Alto/images/Banner 4.jpg" alt="Banner" />
          </div>
          <div className={style.layer}>
            <div className="container">
              <div className={style.bannerText}>
                <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}}>Efficient Sourcing & Flawless Execution</motion.h2>
                <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7,staggerChildren:0.25}}> Global Network of Trusted Suppliers</motion.p>
                <motion.a initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}} href="#Contact">Contact Us</motion.a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className={style.bannerImage}>
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:0}} src="https://cdn.izitechs.com/files/Alto/images/Banner 3.jpg" alt="Banner" />
          </div>
          <div className={style.layer}>
            <div className="container">
              <div className={style.bannerText}>
                <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}}>Financial Support for Your Global Ventures </motion.h2>
                <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7,staggerChildren:0.25}}>Customized Trade Finance Solutions</motion.p>
                <motion.a initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}} href="#Contact">Contact Us</motion.a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {!isMobile && (
        <Swiper
          className={style.bannerGallery}
          modules={[Thumbs]}
          slidesPerView={3}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
        >
          <SwiperSlide>
            <div className={style.Image}>
              <img
                src="https://cdn.izitechs.com/files/Alto/images/Banner%202.jpg"
                alt="bannerImage"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.Image}>
              <img src="https://cdn.izitechs.com/files/Alto/images/Banner 4.jpg" alt="bannerImage" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.Image}>
              <img src="https://cdn.izitechs.com/files/Alto/images/Banner 3.jpg" alt="bannerImage" />
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
