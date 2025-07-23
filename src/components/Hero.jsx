import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools {" "}
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
          for developers
        </span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Explore the world of virtual reality with our cutting-edge tools and resources designed for 
        developers. Whether you're building immersive experiences or innovative applications, 
        VirtualR has you covered.
      </p>
      <div className="flex my-10">
        {/* <button className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded'> */}
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-900 text-white py-3 px-3 rounded'>
              Start for free
            </a>
        {/* </button> */}
        {/* <button className='border px-4 py-2 rounded ml-4'> */}
            <a href="#" className='border px-3 py-3 rounded ml-4 hover:bg-gray-800'>Documentation</a>
        {/* </button> */}
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-4 my-2'>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-4 my-2'>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Hero
