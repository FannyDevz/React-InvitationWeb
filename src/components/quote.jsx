import { motion } from "framer-motion";

function Quote() {
  return (
    <section className="py-10 px-8 bg-[url('/assets/images/pattern.jpeg')]">
      <div className="bg-secondary py-6 px-4 rounded-2xl text-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
          viewport={{ once: true }}
          src="/assets/images/prewedding-photo-1.jpeg"
          alt="Prewedding Photo"
          className="h-[300px] mx-auto mb-4 rounded-[48%_48%_8px_8px]"
        />
        <hr className="overflow-visible border-none h-[50px] w-[1px] bg-white opacity-60 mx-auto mt-0.5 mb-3" />
        <blockquote>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
            viewport={{ once: true }}
            className="text-white text-xs italic font-medium"
          >
            &ldquo; And of all things We created two mates [i.e., counterparts]; perhaps you will remember. &rdquo;
          </motion.p>
          <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
            viewport={{ once: true }}
          >
            <cite className="inline-block not-italic text-sm font-bold text-white mt-4">(Az-Zariyat 51:49)</cite>
          </motion.footer>
        </blockquote>
      </div>
    </section>
  );
}

export default Quote;
