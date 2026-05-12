import React from 'react';
import { motion } from 'motion/react';

interface Clock3DProps {
  time: string;
  color?: string;
}

export default function Clock3D({ time, color = 'emerald' }: Clock3DProps) {
  // Parse time string like "3:15" or "12:00 (midday)"
  const timePart = time.split(' ')[0];
  const [hoursStr, minutesStr] = timePart.split(':');
  
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  // Normalize hours for 12-hour clock
  if (hours > 12) hours -= 12;

  // Calculate rotations
  const minuteRotation = minutes * 6; // 360 / 60
  const hourRotation = (hours * 30) + (minutes * 0.5); // (360 / 12) + (30 / 60)

  const colorClasses: Record<string, string> = {
    emerald: 'from-emerald-400 to-emerald-600',
    blue: 'from-blue-400 to-blue-600',
    rose: 'from-rose-400 to-rose-600',
    indigo: 'from-indigo-400 to-indigo-600',
  };

  const activeColor = colorClasses[color] || colorClasses.emerald;

  return (
    <div className="relative group py-8" style={{ perspective: '1000px' }}>
      {/* 3D Container */}
      <motion.div 
        initial={{ rotateX: 20 }}
        animate={{ rotateX: [15, 25, 15], rotateY: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto"
      >
        {/* Outer Ring / Body */}
        <div 
          className="absolute inset-0 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_-10px_20px_rgba(0,0,0,0.05)] border-[8px] border-slate-50 flex items-center justify-center"
          style={{ transform: 'translateZ(10px)' }}
        >
          
          {/* Glass effect */}
          <div 
            className="absolute inset-2 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"
            style={{ transform: 'translateZ(20px)' }}
          />
          
          {/* Clock Face Numbers/Dots */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 sm:w-1.5 h-3 sm:h-5 bg-slate-200 rounded-full"
              style={{
                top: '5%',
                left: '50%',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
                transformOrigin: '50% 950%'
              }}
            />
          ))}

          {/* Hour Hand */}
          <motion.div 
            className="absolute bottom-1/2 left-1/2 w-2 h-14 sm:h-18 bg-slate-800 rounded-full origin-bottom"
            style={{ 
                translateX: '-50%',
                rotate: hourRotation,
                transform: `translateX(-50%) rotate(${hourRotation}deg) translateZ(30px)`
            }}
            animate={{ rotate: hourRotation }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
             <div className="absolute top-0 left-0 w-full h-full bg-slate-700/50 blur-[2px] translate-x-1 translate-y-1 -z-10" />
          </motion.div>

          {/* Minute Hand */}
          <motion.div 
            className={`absolute bottom-1/2 left-1/2 w-1.5 h-18 sm:h-24 bg-gradient-to-t ${activeColor} rounded-full origin-bottom`}
            style={{ 
                translateX: '-50%',
                rotate: minuteRotation,
                transform: `translateX(-50%) rotate(${minuteRotation}deg) translateZ(40px)`
            }}
            animate={{ rotate: minuteRotation }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
          >
             <div className="absolute top-0 left-0 w-full h-full bg-black/10 blur-[3px] translate-x-1.5 translate-y-1.5 -z-10" />
          </motion.div>

          {/* Center Pin */}
          <div 
            className="absolute w-4 h-4 bg-slate-900 rounded-full border-2 border-white shadow-lg"
            style={{ transform: 'translateZ(50px)' }}
          />
        </div>

        {/* 3D Depth Shadow */}
        <div 
          className="absolute inset-0 bg-slate-900/10 rounded-full blur-2xl transform translate-y-12"
          style={{ transform: 'translateZ(-20px)' }}
        />
      </motion.div>

      {/* Digital Label */}
      <div className="mt-8 text-center">
        <span className="px-6 py-2 bg-slate-100 rounded-full font-black text-slate-400 tracking-[0.4em] text-xs uppercase border border-slate-200 shadow-inner">
           {timePart}
        </span>
      </div>
    </div>
  );
}
