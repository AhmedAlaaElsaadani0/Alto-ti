import React from "react";
import style from "./OurServices.module.css";
import { motion } from "framer-motion";

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: "Consulting",
      description:
        "In a rapidly changing world, we fully analyze and understand all our client’s supply needs and identify any inefficiencies using reliable business intelligence and best practices from their specific industry to develop solutions to help them enhance their business and achieve their strategic objectives.",
      fullWidth: false,
    },
    {
      id: 2,
      title: "Sourcing & Execution",
      description:
        "We have strong connections across a global network of suppliers. We help our clients negotiate and structure deals with special emphasis on price and payment facilities.",
      fullWidth: false,
    },
    {
      id: 3,
      title: "Sourcing & Execution",
      description:
        "At ALTO We understand that accessing traditional finance is difficult for some businesses and as traders with extensive export/import experience, we recognize that every trade transaction is unique. Still, they all have one factor in common lower cost is better for business and this can be attained by getting a significant discount when procuring goods in bulk which necessitates having strong financial support. ALTO Uses know-how and connections to facilitate trade finance to enable its clients to improve the bottom line.",
      fullWidth: true,
    },
  ];
  return (
    <div className="container">
      <div className={style["row"] }>
        {services.map((service, idx) => (
          <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}} className={`${service.fullWidth? style["col-12"] :style["col-6"]}  ${style["card"]}`}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
