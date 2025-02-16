"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6">
      <motion.div
        className="bg-gray-800/50 backdrop-blur-md p-10 rounded-lg shadow-lg max-w-md w-full text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <h1 className="text-3xl font-bold mb-4 text-green-400">MT-Capsule</h1>
        <p className="text-gray-300 mb-6">
          Log in with Spotify to explore your personalized music experience.
        </p>


        <button
          onClick={() => signIn("spotify", { callbackUrl: "/dashboard" })}
          className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 w-full"
        >
          <span>Login with Spotify</span> 🎵
        </button>


        <p className="text-gray-400 text-sm mt-4">
          Don't worry, we never post anything on your behalf!
        </p>
      </motion.div>
    </div>
  );
}
