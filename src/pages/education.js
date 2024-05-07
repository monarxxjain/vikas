import Navbar from '@/components/Navbar'
import { educationData } from '@/consts/data'
import React from 'react'

const education = () => {
  return (
    <div>
      <Navbar/>
      <section className='md:px-40 px-6 flex flex-col gap-6 mt-24'>
        {educationData.degrees.map((data, id) => {
          return(
            <div key={id}>
            <img src={data.logo} className={id<1 ? 'rounded-full h-5 -ml-8 absolute aspect-auto': 'rounded-full h-5 -ml-20 absolute aspect-auto'}></img>
              <p className='italic text-[#B06289]'>{data.name}</p>
              <p className='italic text-[#737d3c]'>{data.institute}</p>
              <p className='italic text-[#737d3c]'>{data.completionYear}</p>
              {data.thesis && <p className='text-[#737d3c]'><span className='font-bold'>Thesis Title: </span>{data.thesis}</p>}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default education