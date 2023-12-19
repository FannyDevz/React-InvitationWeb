import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function Gift() {
  return (
    <section className="p-4 bg-secondary text-center text-white space-y-3 relative after:content-[''] after:block after:absolute after:left-0 after:top-0 after:w-full after:h-12 after:bg-wave-pattern after:bg-cover after:-mt-12">
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
        className="font-fantasy font-bold text-white text-4xl"
      >
        Wedding Gift
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
        className="text-sm mt-3"
      >
        For beloved ones who may want to show your sincere love by sending a gift, please kindly tap the button below:
      </motion.p>
      <div className="flex flex-col items-center gap-3">
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="bg-black/50 h-8 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-black/60"
        >
          Bank Transfer
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="bg-black/50 h-8 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium  hover:bg-black/60"
        >
          Send Gift
        </motion.button>
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
          className="bg-black/50 h-8 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-black/60"
        >
          <CheckCircle2 className="w-5 h-5 mr-1 fill-white text-slate-500 stroke-2" />
          <span>Confirmation</span>
        </motion.button>
      </div>
    </section>
  );
}

export default Gift;
