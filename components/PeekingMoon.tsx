'use client';

import { motion } from 'framer-motion';

export default function PeekingMoon() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute -right-[150px] -bottom-[150px] md:-right-[200px] md:-bottom-[200px] lg:-right-[250px] lg:-bottom-[250px] w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-30 dark:opacity-25"
      >
        {/* Moon gradients with sun illumination from the left */}
        <defs>
          {/* Main moon gradient */}
          <radialGradient id="peekMoonGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4c4b0" />
            <stop offset="70%" stopColor="#b8a896" />
            <stop offset="100%" stopColor="#9c8b7a" />
          </radialGradient>
          
          {/* Crater gradient */}
          <radialGradient id="peekCraterGradient" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#9c8b7a" />
            <stop offset="100%" stopColor="#5a4a3a" />
          </radialGradient>
          
        </defs>
        
        {/* Moon base */}
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="url(#peekMoonGradient)"
        />
        
        {/* Large crater 1 - top */}
        <ellipse
          cx="120"
          cy="100"
          rx="65"
          ry="55"
          fill="url(#peekCraterGradient)"
          opacity="0.5"
        />
        <ellipse
          cx="115"
          cy="95"
          rx="50"
          ry="42"
          fill="#a89888"
          opacity="0.4"
        />
        
        {/* Large crater 2 - center left */}
        <ellipse
          cx="80"
          cy="220"
          rx="70"
          ry="60"
          fill="url(#peekCraterGradient)"
          opacity="0.55"
        />
        <ellipse
          cx="75"
          cy="215"
          rx="55"
          ry="45"
          fill="#a89888"
          opacity="0.35"
        />
        
        {/* Large crater 3 - bottom */}
        <ellipse
          cx="160"
          cy="320"
          rx="60"
          ry="50"
          fill="url(#peekCraterGradient)"
          opacity="0.5"
        />
        <ellipse
          cx="155"
          cy="315"
          rx="45"
          ry="38"
          fill="#a89888"
          opacity="0.4"
        />
        
        {/* Large crater 4 - center */}
        <ellipse
          cx="200"
          cy="180"
          rx="55"
          ry="50"
          fill="url(#peekCraterGradient)"
          opacity="0.45"
        />
        <ellipse
          cx="195"
          cy="175"
          rx="42"
          ry="38"
          fill="#a89888"
          opacity="0.35"
        />
        
        {/* Medium craters */}
        <ellipse
          cx="280"
          cy="130"
          rx="40"
          ry="35"
          fill="url(#peekCraterGradient)"
          opacity="0.4"
        />
        <ellipse
          cx="300"
          cy="280"
          rx="45"
          ry="40"
          fill="url(#peekCraterGradient)"
          opacity="0.45"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="35"
          ry="30"
          fill="url(#peekCraterGradient)"
          opacity="0.4"
        />
        
        {/* Small craters */}
        <circle cx="150" cy="160" r="20" fill="url(#peekCraterGradient)" opacity="0.35" />
        <circle cx="100" cy="320" r="22" fill="url(#peekCraterGradient)" opacity="0.4" />
        <circle cx="220" cy="80" r="18" fill="url(#peekCraterGradient)" opacity="0.35" />
        <circle cx="320" cy="200" r="25" fill="url(#peekCraterGradient)" opacity="0.4" />
        <circle cx="180" cy="260" r="16" fill="url(#peekCraterGradient)" opacity="0.3" />
        
        {/* Tiny detail craters */}
        <circle cx="140" cy="200" r="10" fill="url(#peekCraterGradient)" opacity="0.3" />
        <circle cx="240" cy="320" r="12" fill="url(#peekCraterGradient)" opacity="0.35" />
        <circle cx="60" cy="160" r="14" fill="url(#peekCraterGradient)" opacity="0.3" />
        <circle cx="280" cy="180" r="11" fill="url(#peekCraterGradient)" opacity="0.25" />
        <circle cx="200" cy="120" r="9" fill="url(#peekCraterGradient)" opacity="0.25" />
        
      </svg>
    </motion.div>
  );
}
