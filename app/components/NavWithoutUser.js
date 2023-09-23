"use client";

import { variants } from "@/app/utils/navigation-variants";
import {
  Hamburger,
  HouseLine,
  PencilSimple,
  Question,
  X,
  SignIn,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { Caveat } from "next/font/google";
import Link from "next/link";
import React from "react";

const caveat = Caveat({ subsets: ["cyrillic", "latin"] });

const MotionLink = motion(Link);

export default function NavWithoutUser() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <motion.nav
      className="w-full z-20 text-slate-700"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ delay: 1 }}
    >
      <AnimatePresence>
        {menuVisible ? (
          <div
            className={`flex flex-col items-end w-11/12 mx-auto z-20 absolute`}
          >
            <div className={`${caveat.className} pl-6 pt-8 flex`}>
              <MotionLink href="/">
                <span className="text-xl uppercase flex bg-white border border-slate-700 w-28 px-2 py-1 items-center justify-center rounded-3xl">
                  <HouseLine size={24} className="mr-2" />
                  Home
                </span>
              </MotionLink>
            </div>
            <div className={`${caveat.className} pt-4 flex`}>
              <MotionLink href="/about" variants={variants}>
                <span className="text-xl uppercase flex bg-white border border-slate-700 w-64 px-2 py-1 items-center justify-center rounded-3xl">
                  <Question size={24} className="mr-2" />
                  What is this place?
                </span>
              </MotionLink>
            </div>
            <div className={`${caveat.className} pt-4 flex`}>
              <MotionLink href="/signup" className="mr-4" variants={variants}>
                <span className="text-xl uppercase flex bg-white border border-slate-700 w-32 px-2 py-1 items-center justify-center rounded-3xl">
                  <PencilSimple size={24} className="mr-2" />
                  Sign Up
                </span>
              </MotionLink>
              <MotionLink href="/signin" variants={variants}>
                <span className="text-xl uppercase flex bg-white border border-slate-700 w-32 px-2 py-1 items-center justify-center rounded-3xl">
                  <SignIn size={24} />
                  Sign In
                </span>
              </MotionLink>
            </div>
            <div className={`${caveat.className} pt-4 flex`}>
              <button
                className="text-xl bg-primary uppercase flex border-2 border-white text-white w-64 px-2 py-1 items-center justify-center rounded-3xl"
                onClick={() => setMenuVisible(false)}
                variants={variants}
              >
                <X size={24} />
                Close Menu
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-primary w-16 rounded-3xl py-1 flex justify-center absolute top-4 right-4">
            <Hamburger
              size={36}
              className="text-white"
              onClick={() => setMenuVisible(true)}
              variants={variants}
            />
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
