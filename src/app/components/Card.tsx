'use client';

import React from 'react';
import Link from 'next/link';

const cardData = [
  { color: '142, 249, 252', label: 'HTML', href: '/skills/html' },
  { color: '142, 252, 204', label: 'CSS', href: '/skills/css' },
  { color: '142, 252, 157', label: 'JavaScript', href: '/skills/javascript' },
  { color: '215, 252, 142', label: 'TypeScript', href: '/skills/typescript' },
  { color: '252, 252, 142', label: 'React', href: '/skills/react' },
  { color: '252, 208, 142', label: 'Next.js', href: '/skills/nextjs' },
  { color: '252, 142, 142', label: 'Node.js', href: '/skills/nodejs' },
  { color: '252, 142, 239', label: 'Express', href: '/skills/express' },
  { color: '204, 142, 252', label: 'MongoDB', href: '/skills/mongodb' },
  { color: '142, 202, 252', label: 'Tailwind', href: '/skills/tailwind' },
];

const Card = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden text-center">
      <div
        className="absolute"
        style={{
          width: '100px',
          height: '150px',
          top: '25%',
          left: 'calc(50% - 50px)',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
          animation: 'rotating 20s linear infinite',
        }}
      >
        {cardData.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="absolute inset-0 rounded-xl border-2 overflow-hidden flex items-center justify-center text-white font-semibold transition-transform hover:scale-105"
            style={{
              borderColor: `rgba(${card.color})`,
              transform: `rotateY(${(360 / cardData.length) * index}deg) translateZ(250px)`,
              background: `radial-gradient(circle, rgba(${card.color}, 0.2) 0%, rgba(${card.color}, 0.6) 80%, rgba(${card.color}, 0.9) 100%)`,
            }}
          >
            {card.label}
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes rotating {
          from {
            transform: perspective(1000px) rotateX(-15deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-15deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
