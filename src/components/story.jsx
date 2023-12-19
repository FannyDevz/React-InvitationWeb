import { motion } from "framer-motion";

function Story() {
  return (
    <section className="container px-4 pt-4 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden relative shadow-2xl after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[70%] after:bg-gradient-to-b from-white/0 to-white/80 to-80%"
      >
        <img src="/assets/images/cover.jpeg" alt="Cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
        viewport={{ once: true }}
        className="px-2"
      >
        <div className="bg-secondary p-4 rounded-br-3xl rounded-bl-3xl">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 170, damping: 30 }}
            viewport={{ once: true }}
            className="p-2 text-white text-sm text-center font-medium"
          >
            <span>
              Read and follow our love of live <br />
              journey as a couple here:
            </span>
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 170, damping: 30 }}
            viewport={{ once: true }}
            className="block h-8 px-3 rounded-md bg-white text-secondary text-sm font-medium hover:bg-slate-800 hover:text-white mx-auto my-4"
          >
            Our Love Story
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default Story;
