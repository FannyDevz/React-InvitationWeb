import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

function Info() {
  return (
    <section>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
        viewport={{ once: true }}
        className="pt-10 pb-8 px-4 text-sm text-center text-primary"
      >
        Together with joyful hearts and the grace of God, we cordially request the honor of your presence at the wedding celebration of:
      </motion.p>
      {/* Groom */}
      <div className="bg-secondary mt-14 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: -48 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
          viewport={{ once: true }}
          className="px-8 text-center flex flex-col items-center -translate-y-12"
        >
          <img src="/assets/images/groom-photo-1.jpeg" alt="photo of the groom" className="h-40 w-[120px] object-cover rounded-lg mx-auto" />
          <p className="font-heading text-white text-2xl font-bold pt-2 pb-1">Nailal Mustaghfiri</p>
          <p className="text-white text-sm pb-2">
            <span>
              The son of Mr. Parents Man <br />
              and Mrs. Parents Lady
            </span>
          </p>
          <button className="bg-black/40 flex items-center gap-2 h-6 p-4 rounded-lg text-white text-sm font-semibold hover:bg-black/60">
            <Instagram className="w-4 h-4" /> namakugroom
          </button>
        </motion.div>
      </div>

      {/* Bride */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: -48 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
        viewport={{ once: true }}
        className="px-8 text-center flex flex-col items-center -translate-y-12"
      >
        <img src="/assets/images/bride-photo-1.jpeg" alt="photo of the groom" className="h-40 w-[120px] object-cover rounded-lg mx-auto" />
        <p className="font-heading text-primary text-2xl font-bold pt-2 pb-1">Oktavia Pramana Sulistyo</p>
        <p className="text-primary text-sm pb-2">
          <span>
            The daughter of Mr. Parents Man <br />
            and Mrs. Parents Lady
          </span>
        </p>
        <button className="bg-secondary flex items-center gap-2 h-6 p-4 rounded-lg text-white text-sm font-semibold">
          <Instagram className="w-4 h-4" /> namakubride
        </button>
      </motion.div>
    </section>
  );
}

export default Info;
