"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Assuming you're using Next.js for the Image component

const HelloPetComponent = () => {
  const { ref, inView: isInView } = useInView({ threshold: 0.1 });

  // Animation variants for the image section and cards
  const imgVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 } 
    }
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <div ref={ref} className="relative">
      {/* SVG line with drawing effect */}
      <motion.div
        className="relative mt-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.svg
          className="mx-auto"
          width="354"
          height="12"
          viewBox="0 0 454 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.819 1.14924C171.49 1.54308 150.411 2.02734 129.856 2.55676C100.758 3.30569 71.6711 4.08046 42.7596 5.30716C33.6589 5.69454 24.417 5.93986 15.3732 6.42409C9.6961 6.72753 2.16836 7.16005 1.18043 7.25044C0.663711 7.30209 0.438283 7.37964 0.365441 7.40546C-0.14673 7.58624 -0.053278 7.76049 0.235814 7.89607C0.351906 7.95418 0.645468 8.09627 1.46039 8.11564C55.9599 9.43919 111.689 6.85666 166.254 6.5855C260.881 6.12064 358.375 7.96715 452.25 11.9959C453.07 12.0282 453.867 11.8667 453.98 11.6278C454.117 11.3954 453.525 11.1694 452.706 11.1372C358.671 7.10195 261.017 5.24898 166.209 5.72029C115.356 5.97209 63.4991 8.2383 12.5756 7.46355C13.7457 7.39898 14.893 7.33439 15.9401 7.27629C24.9475 6.79206 34.1506 6.5532 43.2149 6.16582C72.0649 4.93912 101.092 4.16436 130.152 3.42188C166.209 2.49217 203.836 1.69158 241.76 1.31711C255.326 1.37522 268.848 1.43335 282.369 1.50437C311.62 1.65933 341.007 2.11127 370.189 2.71816C378.976 2.9054 387.762 3.09907 396.549 3.26694C399.463 3.32504 406.975 3.49288 408.022 3.47997C409.319 3.46705 409.569 3.15718 409.592 3.10553C409.661 2.98932 409.615 2.8279 408.978 2.69231C408.909 2.67295 408.5 2.60834 407.589 2.5696C354.528 0.284066 297.871 -0.0967975 241.805 0.45199C182.666 0.213106 123.3 0.109757 64.3118 0C63.4673 0 62.7775 0.193718 62.7707 0.432602C62.7661 0.671486 63.4467 0.86521 64.2912 0.871666C107.004 0.949142 149.933 1.02657 192.819 1.14924Z"
            stroke="#FFA5CB"
            strokeWidth="2"
            fill="transparent"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1,
                transition: { 
                  pathLength: { type: "spring", duration: 2, bounce: 0 },
                  opacity: { duration: 0.01 }
                }
              }
            }}
          />
        </motion.svg>
      </motion.div>

      {/* Image section */}
      <motion.div
        className='sm:w-1/2 w-full relative flex items-center justify-center sm:p-3 p-5 sm:mt-0 mt-20'
        variants={imgVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.svg
          className="mx-auto"
          width="554"
          height="480"
          viewBox="0 0 554 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M235.29 45.9698C209.263 61.7232 183.541 81.0935 158.459 102.27C122.951 132.228 87.4576 163.218 52.178 212.286C41.0727 227.781 29.7952 237.595 18.7594 256.964C11.8318 269.101 2.64597 286.402 1.44044 290.017C0.809903 292.083 0.534821 295.185 0.445934 296.218C-0.17905 303.449 -0.0650132 310.419 0.287755 315.843C0.429418 318.167 0.787642 323.851 1.78206 324.626C68.2859 377.567 136.29 274.266 202.874 263.42C318.343 244.826 437.312 318.686 551.865 479.836C552.865 481.127 553.837 474.669 553.976 465.114C554.143 455.817 553.421 446.777 552.421 445.486C437.674 284.078 318.51 209.959 202.818 228.812C140.765 238.883 77.4856 329.532 15.3456 298.542C16.7733 295.959 18.1734 293.376 19.4511 291.051C30.4425 271.683 41.6727 262.128 52.7336 246.633C87.9382 197.565 123.36 166.574 158.82 136.875C202.819 99.6869 248.734 67.6633 295.011 52.6846C311.566 55.0089 328.065 57.3342 344.565 60.1749C380.258 66.373 416.119 84.4508 451.729 108.727C462.451 116.216 473.173 123.963 483.895 130.677C487.45 133.002 496.617 139.715 497.894 139.199C499.478 138.682 499.783 126.287 499.811 124.221C499.894 119.573 499.838 113.116 499.061 107.693C498.977 106.918 498.477 104.334 497.366 102.784C432.618 11.3626 363.481 -3.8719 295.066 18.0796C222.901 8.52424 150.459 4.3903 78.4773 0C77.4468 0 76.6052 7.74872 76.5968 17.3041C76.5913 26.8594 77.4217 34.6084 78.4523 34.8667C130.573 37.9657 182.958 41.063 235.29 45.9698Z"
            stroke="#FFA5CB"
            strokeWidth="2"
            fill="transparent"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1,
                transition: { 
                  pathLength: { type: "spring", duration: 2, bounce: 0 },
                  opacity: { duration: 0.01 }
                }
              }
            }}
          />
        </motion.svg>

        <Image
          src='/image-1@2x.png'
          alt='hello pet'
          layout="fill"
          objectFit="contain"
          className="rounded-lg h-[500px]"
        />

        {/* Right Card */}
        <motion.div
          className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-top-6 -top-9 sm:right-14 right-3 p-2'
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ul className='text-[#EE3399] font-semibold text-sm'>
            <p className='text-lg font-semibold'>Social Community</p>
            <li>- Profiles and feeds</li>
            <li>- Situation update</li>
          </ul>
        </motion.div>

        {/* Left Card */}
        <motion.div
          className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-bottom-6 -bottom-9 sm:left-14 left-3 p-2'
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ul className='text-[#EE3399] font-semibold text-sm'>
            <p className='text-lg font-semibold'>Information Sharing</p>
            <li>- Pet column</li>
            <li>- Information Sharing</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HelloPetComponent;
