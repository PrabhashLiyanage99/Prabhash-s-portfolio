import React from 'react';
import { styles } from '../style';

function HeroSection() {
  return (
    <div className={`${styles.paddingX} absolute left-0 top-[120px] max-w-7xl mx-auto flex items-start  gap-5`}>
   
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-[#85144B] z-40" />
        <div className="w-1 sm:h-90 h-40 bg-gradient-to-b from-[#85144B] to-black z-40" />
      </div>

      <div className="z-40">
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#85144B]">Prabhash</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        Passionate Software Engineer <br className='md:block lg:hidden' />
        skilled in building scalable,<br className='md:block lg:block' />
        efficient applications.
        </p>
      </div>
    </div>

    
  );
}

export default HeroSection;
