import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        y: { duration: 1.5 },
        opacity: { duration: 2 },
        delay: 0.5,
      }}
      viewport={{ once: true }}
      className=" w-full bg-blue-100  dark:backdrop-blur-sm dark:bg-white/30 dark:text-slate-100"
    >
      <div className="flex justify-center items-center py-6 px-8  max-w-7xl mx-auto text-md text-center">
        Copyright © 2024 Shubham Yadav. All Rights Reserved.
      </div>
    </motion.div>
  );
};

export default Footer;
