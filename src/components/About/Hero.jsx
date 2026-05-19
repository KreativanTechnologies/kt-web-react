import React from 'react'

const Hero = () => {
  return (
    <div>
        {/* <div className='relative'>

            <div className=''>
                <img className='w-full h-screen opacity-70' src="/kt3.png" alt="" />
            </div>

            <div className='flex flex-col gap-4 absolute top-[10vw] w-[50vw] justify-self-center text-center '>
              <h2 className='text-[3vw] font-semibold text-amber-300 '>Kreativan Technologies: Bridging the Gap Between Tech Dreams and Reality</h2>
              <p className='text-[1.3vw] text-amber-100'>Kreativan Technologies is a leading name in empowering individuals and businesses through cutting-edge IT solutions and training programs. We are passionate about igniting digital growth and fostering a community of skilled professionals who can navigate the ever-evolving tech landscape.</p>
              <div>
               <button className='bg-amber-300 text-black px-[2.5vw] py-[0.6vw] rounded-full mt-[1vw] cursor-pointer hover:text-amber-300 hover:bg-gray-950'>How We Work</button>
              </div>
            </div>

            
        </div> */}

        <div className='relative'>

    <div>
        <img
            className='w-full h-[70vh] object-cover md:h-screen opacity-70'
            src="/kt3.png"
            alt=""
        />
    </div>

    <div className='flex flex-col gap-[2vw] absolute top-[50vw] sm:top-[16vw] md:top-[12vw] lg:top-[10vw] w-[90vw] sm:w-[75vw] md:w-[60vw] lg:w-[50vw] left-1/2 -translate-x-1/2 text-center'>

        <h2 className='text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-semibold text-amber-300 leading-[1.2]'>
            Kreativan Technologies: Bridging the Gap Between Tech Dreams and Reality
        </h2>

        <p className='text-[3.2vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.3vw] text-amber-100 leading-[1.7]'>
            Kreativan Technologies is a leading name in empowering individuals and businesses through cutting-edge IT solutions and training programs. We are passionate about igniting digital growth and fostering a community of skilled professionals who can navigate the ever-evolving tech landscape.
        </p>

        <div>
            <button className='bg-amber-300 text-black px-[3vw] sm:px-[4vw] lg:px-[2.5vw] py-[2vw] sm:py-[1.2vw] lg:py-[0.6vw] rounded-full mt-[4vw] md:mt-[1vw] cursor-pointer hover:text-amber-300 hover:bg-gray-950 transition-all duration-200'>
                How We Work
            </button>
        </div>

    </div>

</div>
    </div>
  )
}

export default Hero
