import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center mt-20'>
      <Image src={'/images/book2.jpg'} alt='hero-section-image' width={900} height={600}/>
    </div>
  )
}

export default Hero
