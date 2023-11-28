import React, { useRef } from 'react';
import styles from '../App.module.scss';
import { useScroll, motion } from 'framer-motion';

export const Paragraph: React.FC<{ value: string }> = ({ value }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'start 0.25'],
  });

  return (
    <motion.p
      ref={elementRef}
      className={styles.paragraph}
      style={{
        opacity: scrollYProgress,
      }}
    >
      {value}
    </motion.p>
  );
};
