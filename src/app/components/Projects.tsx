// components/Projects.tsx
'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Trang thương mại điện tử',
    description: 'Xây dựng với React và Node.js',
  },
  {
    title: 'Ứng dụng trò chuyện thời gian thực',
    description: 'Sử dụng Socket.io và Express',
  },
  {
    title: 'Trang portfolio cá nhân',
    description: 'Sử dụng Next.js và Tailwind CSS',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Dự án</h2>
      <motion.div
        className="flex gap-6 overflow-x-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="min-w-[250px] bg-gray-100 p-6 rounded-xl shadow-md"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
