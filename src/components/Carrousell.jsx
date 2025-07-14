import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import website1 from "../assets/website1.png";
import website2 from "../assets/website2.jpg";
import website3 from "../assets/website3.jpeg";
import sistema  from "../assets/sistema.png";
import website4 from "../assets/website4.png";


const images = [
website1,
website2,
website3, 
sistema,
website4

];

export function Carrousell() {
  return (
    <section className="max-w-screen-md mx-auto px-4 my-16">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        className="rounded-xl"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white/100 backdrop-blur-md rounded-xl shadow-xl max-w-md w-full overflow-hidden"
            >
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-[700px] h-96  object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
