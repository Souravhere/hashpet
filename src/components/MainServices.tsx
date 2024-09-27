import React from 'react'
import Image from 'next/image'

function MainServices() {
  return (
    <div className='w-full h-fit'>
      <h1 className='text-4xl font-bold text-center mb-2'> Services</h1>
      <p className='text-base text-center'>Join your Pet Life with <span className="text-pink-500">#Pet</span></p>
      <div>
        {/* this is the card section */}
        <div className='sm:flex block w-full sm:h-[450px] h-fit my-5'>
          {/* this is the card left section */}
          <div className='sm:w-1/2 w-full bg-white flex items-center justify-between sm:h-full h-fit px-3'>
            <div>
              <h1 className='text-3xl text-center font-bold my-3'>Hello Pet</h1>
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
                <li>Information Sharing</li>
                <li>Events and Gatherings</li>
              </ul>
            </div>
            {/* card left */}
            <div className='backdrop-blur-sm rounded-lg border bg-white/75 border-pink-300 absolute sm:-bottom-6 -bottom-9 sm:left-14  left-3 p-2'>
              <ul className='text-[#EE3399] font-semibold text-sm'>
                <p className='text-lg font-semibold'>Social Community</p>
                <li>Information Sharing</li>
                <li>Events and Gatherings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainServices
