'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      {/* Title Section */}
      <motion.article className="text-center mb-10 max-w-3xl" variants={itemVariants}>
        <div className="relative  zoom-effect inline-block">
          <motion.h1
            className="font-bold  text-3xl md:text-4xl lg:text-6xl mb-4 "
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            Music Time - Capsule

          </motion.h1>
        </div>
        <p className="text-gray-200 zoom-effect text-lg md:text-xl mt-3 opacity-90">
          Your Personalized Music Journey
        </p>
      </motion.article>

      {/* Features Section */}
      <motion.section
        className="max-w-3xl w-full mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-gray-700/50">
          <p className="text-gray-200  zoom-effect text-center text-lg md:text-xl mb-8 leading-relaxed">
            Welcome to <strong className="font-semibold text-green-400">MT-Capsule</strong>,
            your interactive platform for exploring music and challenging your knowledge!
          </p>

          <ul className="space-y-6">
            {[ {
                icon: '🙂‍↕️',
                title: 'Top Tracks & Artists',
                text: 'View your most-listened-to tracks and artists over the last 6 or 12 months, powered by Spotify’s data.'
              },
              {
                icon: '📈',
                title: 'Graphs & Analytics',
                text: 'View your stats in the form a Graphs.'
              },
              
              {
                icon: '🔒',
                title: 'Api Inegration',
                text: ' All powered by the Spotify API and a sleek, user-friendly interface.'
              }
            ].map((feature, index) => (
              <motion.li
                key={index}
                className="flex  items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <div className="zoom-effect">
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <motion.button
          className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full 
                    transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30
                    flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
      <Link href="/login">    <span>Start Exploring</span> </Link>
          <span aria-hidden="true">🚀</span>
        </motion.button>
      </motion.div>
    </main>
  );
};

export default Home;
