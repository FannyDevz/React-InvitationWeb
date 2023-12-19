import { motion } from "framer-motion";

function CovidProtocols() {
  return (
    <section className="bg-secondary pb-6 px-8 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: -96 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
        viewport={{ once: true }}
        className="bg-secondary rounded-[40px] border-[6px] border-[#9baebf] relative w-full aspect-square overflow-hidden shadow-lg -translate-y-24 -mb-20"
      >
        <img src="/assets/images/covid-protocols.jpg" alt="Covid Protocol" className="absolute inset-0 w-full h-full" />
      </motion.div>
    </section>
  );
}

export default CovidProtocols;
