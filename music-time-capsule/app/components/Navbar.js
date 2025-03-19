"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession(); // Get user session
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-2xl hover:text-green-400 font-bold tracking-wide">MT-Capsule</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center  space-x-6 text-lg">
          <Link href="/">    <li className="hover:text-green-400 cursor-pointer  transition">Home</li> </Link>
          <Link href="/dashboard">    <li className="hover:text-green-400 cursor-pointer  transition">Dashboard</li> </Link>


          {session ? (
            <li>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link href={"/login"}>
                <button

                  className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md transition"
                >
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col  items-start space-y-4 bg-black py-6 mt-2 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href="/">    <li className="hover:text-green-400 cursor-pointer  transition">Home</li> </Link>
            <Link href="/dashboard"> <li className="hover:text-green-400 cursor-pointer  transition">Dashboard</li> </Link>

            {session ? (
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
              <Link href={"/login"}>
                <button

                  className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md transition"
                >
                  Login
                </button>
              </Link>
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
