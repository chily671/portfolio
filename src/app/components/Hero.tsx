// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20 bg-white text-center">
      <motion.h1
        className="text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        👋 Xin chào, tôi là <span className="text-blue-500">Tên của bạn</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Tôi là một nhà phát triển web đam mê xây dựng giao diện đẹp và hiện đại.
      </motion.p>
    </section>
  );
}
