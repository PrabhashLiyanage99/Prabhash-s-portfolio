import React from 'react'
import * as Tilt from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motions'
import { Html } from '@react-three/drei';

function About() {
  return (
    <Html>
      <motion.div>
        <p className={`${styles.sectionSubText} z-40`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
    </Html>
  );
}

export default About;
