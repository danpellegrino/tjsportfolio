'use client'

import { motion } from 'framer-motion';

// Hooks
import useScrollProgress from '@/hooks/useScrollProgress';

// Variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* Completion Bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed z-50 bg-gradient-to-t from-teal-300 from-10% via-indigo-400 via-50% to-sky-500 to-90% w-1.5 top-0 right-0 bottom-0 transition-all duration-700'
      ></span>
      {/* <div className='h-[4000px]'></div> */}
    </>
  );
};

export default Template;
