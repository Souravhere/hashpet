"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedCard = ({ children, isLeft }: { children: React.ReactNode; isLeft: boolean }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => { 
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  )
}

function MainServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      className='w-full h-fit py-7 overflow-x-hidden'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className='text-4xl font-bold text-center mb-2'
        variants={titleVariants}
      >
        Services
      </motion.h1>
      <motion.p 
        className='text-base text-center mb-8 overflow-x-hidden'
        variants={titleVariants}
      > 
        Join your Pet Life with <span className="text-pink-500">Pet</span>
      </motion.p>

      {/* Card 1 */}
      <AnimatedCard isLeft={true}>
        <div className='sm:flex block w-full sm:h-[450px] h-fit my-5'>
          {/* this is the card left section */}
          <div className='sm:w-1/2 w-full bg-white flex items-center justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-4xl text-center font-bold my-3'>Hello Pet</h1>
              {/* here is svg */}
              <p className='text-base text-center sm:w-[70%] mx-auto'>
                Pet owners share information about their pets, we provide a variety of features that allow you to form a community and help each other.
              </p>
            </div>
          </div>
          {/* this is img section */}
          <div className='sm:w-1/2 w-full relative flex items-center justify-center sm:p-3 p-5 sm:mt-0 mt-20'>
            <svg
              width="554"
              height="480"
              viewBox="0 0 554 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M235.29 45.9698C209.263 61.7232 183.541 81.0935 158.459 102.27C122.951 132.228 87.4576 163.218 52.178 212.286C41.0727 227.781 29.7952 237.595 18.7594 256.964C11.8318 269.101 2.64597 286.402 1.44044 290.017C0.809903 292.083 0.534821 295.185 0.445934 296.218C-0.17905 303.449 -0.0650132 310.419 0.287755 315.843C0.429418 318.167 0.787642 323.851 1.78206 324.626C68.2859 377.567 136.29 274.266 202.874 263.42C318.343 244.826 437.312 318.686 551.865 479.836C552.865 481.127 553.837 474.669 553.976 465.114C554.143 455.817 553.421 446.777 552.421 445.486C437.674 284.078 318.51 209.959 202.818 228.812C140.765 238.883 77.4856 329.532 15.3456 298.542C16.7733 295.959 18.1734 293.376 19.4511 291.051C30.4425 271.683 41.6727 262.128 52.7336 246.633C87.9382 197.565 123.36 166.574 158.82 136.875C202.819 99.6869 248.734 67.6633 295.011 52.6846C311.566 55.0089 328.065 57.3342 344.565 60.1749C380.258 66.373 416.119 84.4508 451.729 108.727C462.451 116.216 473.173 123.963 483.895 130.677C487.45 133.002 496.617 139.715 497.894 139.199C499.478 138.682 499.783 126.287 499.811 124.221C499.894 119.573 499.838 113.116 499.061 107.693C498.977 106.918 498.477 104.334 497.366 102.784C432.618 11.3626 363.481 -3.8719 295.066 18.0796C222.901 8.52424 150.459 4.3903 78.4773 0C77.4468 0 76.6052 7.74872 76.5968 17.3041C76.5913 26.8594 77.4217 34.6084 78.4523 34.8667C130.573 37.9657 182.958 41.063 235.29 45.9698Z"
                fill="#EA79AB"
              />
            </svg>
            {/* img here */}
            <Image
              src='/image-1@2x.png'
              alt='hello pet'
              layout="fill"
              objectFit="contain"
              className="rounded-lg h-[500px]"
            />
            {/* card right */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-top-6 -top-9 sm:right-14  right-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Social Community</p>
                <li>- Profiles and feeds</li>
                <li>- Situation update</li>
              </ul>
            </div>
            {/* card left */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-bottom-6 -bottom-9 sm:left-14  left-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Information Sharing</p>
                <li>- Pet column</li>
                <li>- Information Sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Card 2 */}
      <AnimatedCard isLeft={false}>
        <div className='sm:flex block w-full sm:h-[450px] h-fit my-5'>
          {/* this is the text section for mobile */}
          <div className='sm:w-1/2 sm:hidden block w-full bg-white items-center mt-20 justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-4xl text-center font-bold my-3'>PetPle</h1>
              {/* here is svg */}
              <p className='text-base text-center sm:w-[70%] mx-auto'>
              This service provides walking and care services for pets.Petple promotes the health and happiness of pets through a variety of care options for pets. We promote convenience in the lives of pet owners.
              </p>
            </div>
          </div>
          {/* this is img section */}
          <div className='sm:w-1/2 w-full relative flex items-center justify-center sm:p-3 p-5 sm:mt-0 mt-20'>
                  
<svg width="55    3" height="486" viewBox="0 0 553 486" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M314.265 438.009C340.488 422.584 366.451 403.539 391.799 382.68C427.68 353.172 463.561 322.631 499.456 274.011C510.756 258.657 522.156 248.987 533.435 229.758C540.514 217.708 549.917 200.525 551.168 196.925C551.825 194.867 552.139 191.769 552.241 190.737C552.957 183.514 552.931 176.543 552.646 171.116C552.534 168.79 552.247 163.102 551.263 162.315C485.431 108.54 416.131 210.977 349.416 220.984C233.722 238.123 115.692 162.77 3.17754 0.191102C2.19394 -1.11265 1.14041 5.33267 0.881256 14.8855C0.59752 24.1798 1.20576 33.2273 2.18936 34.5311C114.895 197.371 233.116 272.985 349.036 255.59C411.211 246.301 475.627 156.456 537.372 188.226C535.912 190.79 534.479 193.356 533.172 195.664C521.938 214.893 510.588 224.306 499.333 239.66C463.513 288.281 427.705 318.823 391.873 348.073C347.41 384.705 301.095 416.148 254.633 430.543C238.109 428.01 221.64 425.477 205.177 422.429C169.565 415.782 133.935 397.254 98.633 372.532C88.0062 364.908 77.3828 357.027 66.7462 350.178C63.2203 347.809 54.139 340.98 52.8549 341.481C51.2652 341.977 50.8038 354.367 50.75 356.433C50.6081 361.08 50.5825 367.537 51.2919 372.97C51.3655 373.745 51.8328 376.336 52.9243 377.899C116.516 470.129 185.456 486.232 254.142 465.144C326.181 475.607 398.565 480.653 470.486 485.949C471.516 485.962 472.455 478.225 472.584 468.67C472.71 459.116 471.977 451.357 470.95 451.086C418.872 447.331 366.531 443.574 314.265 438.009Z" fill="#CBB1FB"/>
</svg>

            {/* img here */}
            <Image
              src='/image@2x.png'
              alt='hello pet'
              layout="fill"
              objectFit="contain" 
              className="rounded-lg h-[500px]"
            />
            {/* card right */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-top-6 -top-9 sm:right-14  right-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Events and Gatherings</p>
                <li>- Online event</li>
                <li>- Offline meeting</li>
              </ul>
            </div>
            {/* card left */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-bottom-6 -bottom-9 sm:left-14  left-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Location Services</p>
                <li>- Walking path</li>
                <li>- Reviews ard ratings</li>
              </ul>
            </div>
          </div>
          {/* this is the text section for the desktop */}
          <div className='sm:w-1/2 hidden w-full bg-white sm:flex items-center justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-4xl text-center font-bold my-3'>PetPle</h1>
              {/* here is svg */}
              <p className='text-base text-center sm:w-[70%] mx-auto'>
              This service provides walking and care services for pets.Petple promotes the health and happiness of pets through a variety of care options for pets. We promote convenience in the lives of pet owners.
              </p>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Card 3 */}
      <AnimatedCard isLeft={true}>
        <div className='sm:flex block w-full sm:h-[450px] h-fit my-5 sm:mt-0 mt-14'>
          {/* this is the card left section */}
          <div className='sm:w-1/2 w-full bg-white flex items-center justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-4xl text-center font-bold my-3'>Pet Doc</h1>
              {/* here is svg */}
              <p className='text-base text-center sm:w-[70%] mx-auto'>
              This service is for your pet&apos;s fews health and medical management. PetDoc prioritizes the health of pets by providing a variety of medical-related services. We help pet owners manage their pet&apos;s health more easily
              </p>
            </div>
          </div>
          {/* this is img section */}
          <div className='sm:w-1/2 w-full relative flex items-center justify-center sm:p-3 p-5 sm:mt-0 mt-20'>
            <svg
              width="554"
              height="480"
              viewBox="0 0 554 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M235.29 45.9698C209.263 61.7232 183.541 81.0935 158.459 102.27C122.951 132.228 87.4576 163.218 52.178 212.286C41.0727 227.781 29.7952 237.595 18.7594 256.964C11.8318 269.101 2.64597 286.402 1.44044 290.017C0.809903 292.083 0.534821 295.185 0.445934 296.218C-0.17905 303.449 -0.0650132 310.419 0.287755 315.843C0.429418 318.167 0.787642 323.851 1.78206 324.626C68.2859 377.567 136.29 274.266 202.874 263.42C318.343 244.826 437.312 318.686 551.865 479.836C552.865 481.127 553.837 474.669 553.976 465.114C554.143 455.817 553.421 446.777 552.421 445.486C437.674 284.078 318.51 209.959 202.818 228.812C140.765 238.883 77.4856 329.532 15.3456 298.542C16.7733 295.959 18.1734 293.376 19.4511 291.051C30.4425 271.683 41.6727 262.128 52.7336 246.633C87.9382 197.565 123.36 166.574 158.82 136.875C202.819 99.6869 248.734 67.6633 295.011 52.6846C311.566 55.0089 328.065 57.3342 344.565 60.1749C380.258 66.373 416.119 84.4508 451.729 108.727C462.451 116.216 473.173 123.963 483.895 130.677C487.45 133.002 496.617 139.715 497.894 139.199C499.478 138.682 499.783 126.287 499.811 124.221C499.894 119.573 499.838 113.116 499.061 107.693C498.977 106.918 498.477 104.334 497.366 102.784C432.618 11.3626 363.481 -3.8719 295.066 18.0796C222.901 8.52424 150.459 4.3903 78.4773 0C77.4468 0 76.6052 7.74872 76.5968 17.3041C76.5913 26.8594 77.4217 34.6084 78.4523 34.8667C130.573 37.9657 182.958 41.063 235.29 45.9698Z"
                fill="#EA79AB"
              />
            </svg>
            {/* img here */}
            <Image
              src='/image-11@2x.png'
              alt='hello pet'
              layout="fill"
              objectFit="contain"
              className="rounded-lg h-[500px]"
            />
            {/* card right */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-top-6 -top-9 sm:right-20  right-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Activity tracking</p>
                <li>- Exercise tracking</li>
                <li>- Activity log</li>
              </ul>
            </div>
            {/* card left */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-bottom-6 -bottom-9 sm:left-20  left-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Reward System</p>
                <li>- Reward Exchange</li>
                <li>- Point Accumulation</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Card 4 */}
      <AnimatedCard isLeft={false}>
        <div className='sm:flex block w-full sm:h-[450px] h-fit my-5'>
          {/* this is text section for the mobile */}
          <div className='sm:w-1/2 w-full sm:hidden bg-white flex mt-20 items-center justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-4xl text-center font-bold my-3'>Pet Parazzi</h1>
              {/* here is svg */}
              <p className='text-base text-center sm:w-[70%] mx-auto'>
              Enjoy recording moments with your pets and sharing them with other users. At the same time, you can receive various rewards and reminisce about happy memories with your pet.
              </p>
            </div>
          </div>
          {/* this is img section */}
          <div className='sm:w-1/2 w-full relative flex items-center justify-center sm:p-3 p-5 sm:mt-0 mt-20'>           
            <svg width="553" height="486" viewBox="0 0 553 486" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M314.265 438.009C340.488 422.584 366.451 403.539 391.799 382.68C427.68 353.172 463.561 322.631 499.456 274.011C510.756 258.657 522.156 248.987 533.435 229.758C540.514 217.708 549.917 200.525 551.168 196.925C551.825 194.867 552.139 191.769 552.241 190.737C552.957 183.514 552.931 176.543 552.646 171.116C552.534 168.79 552.247 163.102 551.263 162.315C485.431 108.54 416.131 210.977 349.416 220.984C233.722 238.123 115.692 162.77 3.17754 0.191102C2.19394 -1.11265 1.14041 5.33267 0.881256 14.8855C0.59752 24.1798 1.20576 33.2273 2.18936 34.5311C114.895 197.371 233.116 272.985 349.036 255.59C411.211 246.301 475.627 156.456 537.372 188.226C535.912 190.79 534.479 193.356 533.172 195.664C521.938 214.893 510.588 224.306 499.333 239.66C463.513 288.281 427.705 318.823 391.873 348.073C347.41 384.705 301.095 416.148 254.633 430.543C238.109 428.01 221.64 425.477 205.177 422.429C169.565 415.782 133.935 397.254 98.633 372.532C88.0062 364.908 77.3828 357.027 66.7462 350.178C63.2203 347.809 54.139 340.98 52.8549 341.481C51.2652 341.977 50.8038 354.367 50.75 356.433C50.6081 361.08 50.5825 367.537 51.2919 372.97C51.3655 373.745 51.8328 376.336 52.9243 377.899C116.516 470.129 185.456 486.232 254.142 465.144C326.181 475.607 398.565 480.653 470.486 485.949C471.516 485.962 472.455 478.225 472.584 468.67C472.71 459.116 471.977 451.357 470.95 451.086C418.872 447.331 366.531 443.574 314.265 438.009Z" fill="#CBB1FB"/>
            </svg>
            {/* img here */}
            <Image
              src='/image-2@2x.png'
              alt='hello pet'
              layout="fill"
              objectFit="contain"
              className="rounded-lg h-[500px]"
            />
            {/* card right */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-top-6 -top-9 sm:right-14  right-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>GPS & Iocation Tacking</p>
                <li>- Safety management</li>
                <li>- Record your walking route</li>
              </ul>
            </div>
            {/* card left */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-bottom-6 -bottom-9 sm:left-14  left-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Information sharing</p>
                <li>- Health Contents</li>
                <li>- Exercise Tips</li>
              </ul>
            </div>
          </div>
          {/* this is the card left section */}
          <div className='sm:w-1/2 w-full bg-white sm:flex hidden items-center justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-4xl text-center font-bold my-3'>Pet Parazzi</h1>
              {/* here is svg */}
              <p className='text-base text-center sm:w-[70%] mx-auto'>
              Enjoy recording moments with your pets and sharing them with other users. At the same time, you can receive various rewards and reminisce about happy memories with your pet.
              </p>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Card 5 */}
      <AnimatedCard isLeft={true}>
        <div className='sm:flex block w-full sm:h-[450px] h-fit my-5 sm:mt-0 mt-14'>
          {/* this is the card left section */}
          <div className='sm:w-1/2 w-full bg-white flex items-center justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-4xl text-center font-bold my-3'>Pet Walk</h1>
              {/* here is svg */}
              <p className='text-base text-center sm:w-[70%] mx-auto'>
              Pet owners and pets can be active together and enjoy receiving rewards.
              </p>
            </div>
          </div>
          {/* this is img section */}
          <div className='sm:w-1/2 w-full relative flex items-center justify-center sm:p-3 p-5 sm:mt-0 mt-20'>
            <svg
              width="554"
              height="480"
              viewBox="0 0 554 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M235.29 45.9698C209.263 61.7232 183.541 81.0935 158.459 102.27C122.951 132.228 87.4576 163.218 52.178 212.286C41.0727 227.781 29.7952 237.595 18.7594 256.964C11.8318 269.101 2.64597 286.402 1.44044 290.017C0.809903 292.083 0.534821 295.185 0.445934 296.218C-0.17905 303.449 -0.0650132 310.419 0.287755 315.843C0.429418 318.167 0.787642 323.851 1.78206 324.626C68.2859 377.567 136.29 274.266 202.874 263.42C318.343 244.826 437.312 318.686 551.865 479.836C552.865 481.127 553.837 474.669 553.976 465.114C554.143 455.817 553.421 446.777 552.421 445.486C437.674 284.078 318.51 209.959 202.818 228.812C140.765 238.883 77.4856 329.532 15.3456 298.542C16.7733 295.959 18.1734 293.376 19.4511 291.051C30.4425 271.683 41.6727 262.128 52.7336 246.633C87.9382 197.565 123.36 166.574 158.82 136.875C202.819 99.6869 248.734 67.6633 295.011 52.6846C311.566 55.0089 328.065 57.3342 344.565 60.1749C380.258 66.373 416.119 84.4508 451.729 108.727C462.451 116.216 473.173 123.963 483.895 130.677C487.45 133.002 496.617 139.715 497.894 139.199C499.478 138.682 499.783 126.287 499.811 124.221C499.894 119.573 499.838 113.116 499.061 107.693C498.977 106.918 498.477 104.334 497.366 102.784C432.618 11.3626 363.481 -3.8719 295.066 18.0796C222.901 8.52424 150.459 4.3903 78.4773 0C77.4468 0 76.6052 7.74872 76.5968 17.3041C76.5913 26.8594 77.4217 34.6084 78.4523 34.8667C130.573 37.9657 182.958 41.063 235.29 45.9698Z"
                fill="#EA79AB"
              />
            </svg>
            {/* img here */}
            <Image
              src='/image-3@2x.png'
              alt='hello pet'
              layout="fill"
              objectFit="contain"
              className="rounded-lg h-[500px]"
            />
            {/* card right */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-top-6 -top-9 sm:right-14  right-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Events & Promotions</p>
                <li>- Promotion</li>
                <li>- Exercise challenge</li>
              </ul>
            </div>
            {/* card left */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-bottom-6 -bottom-9 sm:left-14  left-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Group Activity</p>
                <li>- Add and follow Friends</li>
                <li>- Competition and Challenge</li>
              </ul>
            </div>   
          </div>
        </div>
      </AnimatedCard>
    </motion.div>
  )
}

export default MainServices