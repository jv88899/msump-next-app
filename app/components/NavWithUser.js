"use client";

import { variants } from "@/app/utils/navigation-variants";
import {
  ChatDots,
  Gear,
  Hamburger,
  HouseLine,
  MusicNoteSimple,
  Playlist,
  VinylRecord,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { Caveat } from "next/font/google";
import Link from "next/link";
import React from "react";

const caveat = Caveat({ subsets: ["cyrillic", "latin"] });

const MotionLink = motion(Link);

export default function NavWithUser() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <motion.nav
      className="w-full z-20 h-screen absolute"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ delay: 1 }}
    >
      <AnimatePresence>
        {menuVisible ? null : (
          <motion.button
            variants={variants}
            className="bg-slate-700 w-16 rounded-3xl py-1 flex justify-center absolute top-4 right-4"
            onClick={() => setMenuVisible(true)}
          >
            <Hamburger size={36} />
          </motion.button>
        )}
        <div
          className={`flex flex-col items-end w-11/12 mx-auto z-20`}
          variants={variants}
        >
          <div className={`${caveat.className} pl-6 pt-8 flex`}>
            <MotionLink href="/" className="mr-4" variants={variants}>
              <span className="text-xl uppercase flex bg-white border border-slate-700 w-28 px-2 py-1 items-center justify-center rounded-3xl">
                <HouseLine size={24} className="mr-2" />
                Home
              </span>
            </MotionLink>
            <MotionLink href="/favorites" variants={variants}>
              <span className="text-xl uppercase flex bg-white border border-slate-700 w-48 px-2 py-1 items-center justify-center rounded-3xl">
                <Playlist size={24} className="mr-2" />
                Your Favorites
              </span>
            </MotionLink>
          </div>
          <div className={`${caveat.className} pt-4 flex justify-end`}>
            <MotionLink href="/vote" className="mr-4" variants={variants}>
              <span className="text-xl uppercase flex bg-white border border-slate-700 w-52 px-2 py-1 items-center justify-center rounded-3xl">
                <VinylRecord size={24} className="mr-2" />
                Vote on Albums
              </span>
            </MotionLink>
            <MotionLink href="/songs" variants={variants}>
              <span className="text-xl uppercase flex bg-white border border-slate-700 w-28 px-2 py-1 items-center justify-center rounded-3xl">
                <MusicNoteSimple size={24} className="mr-2" />
                Songs
              </span>
            </MotionLink>
          </div>
          <div className={`${caveat.className} pt-4 flex justify-end`}>
            <MotionLink href="/comments" className="mr-4" variants={variants}>
              <span className="text-xl uppercase flex bg-white border border-slate-700 w-40 px-2 py-1 items-center justify-center rounded-3xl">
                <ChatDots size={24} className="mr-2" />
                Comments
              </span>
            </MotionLink>
            <MotionLink href="/profile" variants={variants} key={6}>
              <span className="text-xl uppercase flex bg-white border border-slate-700 w-32 px-2 py-1 items-center justify-center rounded-3xl">
                <Gear size={24} />
                Profile
              </span>
            </MotionLink>
          </div>
          <div className={`${caveat.className} pt-4 flex`}>
            <button
              className="text-xl uppercase flex bg-slate-700 border-2 border-white text-white w-64 px-2 py-1 items-center justify-center rounded-3xl"
              onClick={() => setMenuVisible(false)}
              variants={variants}
            >
              <X size={24} />
              Close Menu
            </button>
          </div>
        </div>
      </AnimatePresence>
    </motion.nav>
  );
}
