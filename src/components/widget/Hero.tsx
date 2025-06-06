import Image from 'next/image'
import React from 'react'
import Wrapper from '../shared/Wrapper'

const Hero = () => {
  return (
    <Wrapper>
    <div className='flex justify-center items-center mt-20'>
      <Image src={'/images/books3.jpg'} alt='hero-section-image' width={900} height={600} className='w-full h-[80vh] object-center object-cover'/>
    </div>
    </Wrapper>
  )
}

export default Hero
