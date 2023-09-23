"use client";

import { motion } from "framer-motion";
import { Caveat_Brush } from "next/font/google";

const caveatBrush = Caveat_Brush({ subsets: ["latin"], weight: ["400"] });

export default function LandingPage() {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center text-slate-700`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
        className={`${caveatBrush.className} text-8xl font-extrabold`}
      >
        MSUMP
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
        className={`${caveatBrush.className} text-2xl italic`}
      >
        The greatest albums of all time
      </motion.p>
    </div>
  );
}
