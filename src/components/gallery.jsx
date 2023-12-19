import { useRef } from "react";
import { register } from "swiper/element/bundle";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

register();

function Gallery() {
  const swiperElRef = useRef(null);

  return (
    <section className="py-14 px-4 bg-white">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 170,
          damping: 30,
        }}
        viewport={{ once: true }}
        src="/assets/images/bride-and-groom-photo-1.jpeg"
        alt="Bride and Groom"
        className="rounded-2xl drop-shadow-lg mb-4"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 170,
          damping: 30,
        }}
        viewport={{ once: true }}
      >
        <swiper-container ref={swiperElRef} navigation="true" pagination="true" autoplay-delay="3000" autoplay-disable-on-interaction="false">
          <swiper-slide>
            <img src="/assets/images/gallery/slide-1.jpg" alt="Slide 1" className="w-full h-[600px] rounded-2xl object-cover" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/gallery/slide-2.jpg" alt="Slide 2" className="w-full h-[600px] rounded-2xl object-cover" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/gallery/slide-3.jpg" alt="Slide 3" className="w-full h-[600px] rounded-2xl object-cover" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/gallery/slide-4.jpg" alt="Slide 4" className="w-full h-[600px] rounded-2xl object-cover" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/gallery/slide-5.jpg" alt="Slide 5" className="w-full h-[600px] rounded-2xl object-cover" />
          </swiper-slide>
        </swiper-container>
      </motion.div>

      <div className="text-center pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="font-fantasy font-medium text-4xl text-primary mt-6 mb-3"
        >
          Instagram <br /> Wedding Filter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="text-sm text-primary font-medium mb-4"
        >
          Capture your moment while attending our wedding by using the Instagram filter below:
        </motion.p>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          src="/assets/images/cover.jpeg"
          alt="Cover"
          className="max-w-[80%] mx-auto rounded-2xl shadow-md my-6"
        />
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="bg-primary text-white h-8 px-3 inline-flex items-center justify-center rounded-md text-sm hover:bg-black/60"
        >
          <Instagram className="w-4 h-4 mr-1" />
          <span>Use Filter</span>
        </motion.button>
      </div>
    </section>
  );
}

export default Gallery;
