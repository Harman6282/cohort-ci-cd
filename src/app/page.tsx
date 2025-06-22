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
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-r from-[#f5deb3] to-[#ffd7be] text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#452b1f] leading-snug"
        variants={item}
      >
        Dad, thank you for everything! ❤️
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#452b1f] mt-4 max-w-3xl"
        variants={item}
      >
        Wishing you a day as bright and beautiful as you are!
      </motion.p>

      <motion.div
        className="flex flex-row items-center justify-center mt-8 space-x-4"
        variants={container}
      >
        <motion.div
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#ffd7be]"
          variants={item}
          animate={scale}
        />
        <motion.div
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#ffd7be]"
          variants={item}
          animate={rotate}
        />
        <motion.div
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#ffd7be]"
          variants={item}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 0, 360] }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Home;
