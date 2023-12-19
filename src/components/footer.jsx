import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="py-4 px-8 bg-[#9baebf] text-white text-center">
      <motion.a
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 170,
          damping: 30,
        }}
        viewport={{ once: true }}
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/invitato.id/"
        className="block w-max mx-auto"
      >
        <img
          className="max-w-[120px]"
          src="https://user-images.githubusercontent.com/10141928/137603877-5d2ddf10-39a7-4586-8ab1-d9cca7fe8898.png"
          alt="Logo"
        />
      </motion.a>
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
        className="text-xs"
      >
        Created with Love by Invitato
      </motion.p>
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
        className="text-xs mt-3"
      >
        © 2023 Nailal & Via. All Rights Reserved
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 170,
          damping: 30,
        }}
        viewport={{ once: true }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://youtu.be/YRsd03_XIfg"
        className="text-xs inline-block"
      >
        Song by I Finally Found Someone - Barbra Streisand ft. Bryan Adams
      </motion.a>
    </footer>
  );
}

export default Footer;
