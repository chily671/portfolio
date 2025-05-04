// components/Skills.tsx
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Kỹ năng</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700">{skill}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
