"use client";
import { motion } from "framer-motion";

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  };

  const loop = {
    repeat: Infinity,
    duration: 2,
  };

  const scale = {
    scale: [1, 1.2, 1],
    transition: loop,
  };

  const rotate = {
    rotate: [0, 0, 360],
    transition: loop,
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#f5deb3] to-[#ffd7be]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-7xl font-bold text-[#452b1f]" variants={item}>
        Dad Thank you for everything! ❤️
        <br />
      </motion.h1>
      <motion.p className="text-4xl text-[#452b1f] mt-4" variants={item}>
        Wishing you a day as bright and beautiful as you are!
      </motion.p>
      <motion.div
        className="flex flex-row items-center justify-center mt-8"
        variants={container}
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-[#ffd7be] mr-4"
          variants={item}
          animate={scale}
        />
        <motion.div
          className="w-12 h-12 rounded-full bg-[#ffd7be] mr-4"
          variants={item}
          animate={rotate}
        />
        <motion.div
          className="w-12 h-12 rounded-full bg-[#ffd7be]"
          variants={item}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 0, 360] }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Home;
