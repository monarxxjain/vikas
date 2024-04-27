import Navbar from '@/components/Navbar'
import { educationData } from '@/consts/data'
import React from 'react'

const education = () => {
  return (
    <div>
      <Navbar/>
      <section className='px-40 flex flex-col gap-6 mt-24'>
        {educationData.degrees.map((data, id) => {
          return(
            <div key={id}>
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