import { motion } from "framer-motion";

function LiveVideo() {
  return (
    <section>
      <div className="p-8 text-center pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
          viewport={{ once: true }}
          className="font-fantasy text-secondary text-3xl font-bold"
        >
          Live Wedding
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
          viewport={{ once: true }}
          className="text-lg text-slate-700 font-medium"
        >
          Nailal & Via
        </motion.p>
      </div>
      <div className="pb-16 bg-cover-invitation bg-no-repeat bg-cover bg-center relative isolate after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-black/30 after:z-[-1] before:conten-[''] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-12 before:bg-[url('/assets/images/wave-pattern-2.svg')] before:bg-cover">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: -56 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto px-8 -translate-y-14 -mb-10"
        >
          <iframe
            title="Live wedding of Nailal &amp; Via"
            src="https://www.youtube.com/embed/AhGpYiRxqlw"
            allowFullScreen
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full aspect-video rounded-2xl border-[8px] border-secondary"
          ></iframe>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
          viewport={{ once: true }}
          className="py-4 px-8 text-center text-white text-sm"
        >
          <span>
            Live wedding can also be watched
            <br />
            via the Youtube platform:
          </span>
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/AhGpYiRxqlw"
            className="bg-orange-500 inline-flex items-center justify-center h-8 px-3 p-2 rounded-md font-semibold mt-2 animate-zoom"
          >
            Open via Youtube
          </a>
        </motion.p>
      </div>
    </section>
  );
}

export default LiveVideo;
