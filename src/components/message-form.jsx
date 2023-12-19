import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function MessageForm() {
  return (
    <section className="bg-secondary bg-[url('/assets/images/bride-and-groom-photo-2.jpeg')] bg-no-repeat bg-cover relative isolate after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-secondary/60 after:z-[-1]">
      <div className="pt-8 pb-14 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="font-fantasy font-bold text-4xl text-white text-center"
        >
          Prayers & Wishes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="text-center pt-2 pb-6 text-white"
        >
          <span>
            Please leave your sincere prayers <br /> and wishes to us and our families:
          </span>
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <input type="text" placeholder="Your Name" className="form-control" />
          <textarea placeholder="Prayers & Wishes" className={cn("form-control", "min-h-[80px]")}></textarea>
          <button className="bg-black/50 text-white h-9 min-w-[80px] px-3 flex items-center justify-center rounded-md font-medium hover:bg-black/60 transition duration-200 ml-auto">
            Send
          </button>
        </motion.form>

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
          className="py-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg border-[3px] border-white flex items-center justify-center">
              I
            </div>
            <div className="bg-white pt-1 pb-3 px-4 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
              <p className="text-secondary font-bold">Invitato</p>
              <p className="text-sm text-primary">
                May your love continue to grow each and every year. Best wishes on your wedding Nailal & Via. Thank you for trusting Invitato for your
                e-invitation 🤍
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="p-4 pb-10 bg-secondary text-white text-center text-sm relative isolate after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-12 after:bg-wave-pattern after:bg-cover after:-mt-12">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="font-medium"
        >
          It will be a joy for us if you are able to be attend on our wedding day. Thank you for all the kind words, prayers, and attentions given. We
          wish your understanding for all health protocols restrictions. See you on our wedding day!
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 170,
            damping: 30,
          }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl mt-6"
        >
          Nailal & Via
        </motion.h2>
      </div>
    </section>
  );
}

export default MessageForm;
