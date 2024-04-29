import Navbar from '@/components/Navbar'
import { educationData, experienceData } from '@/consts/data'
import React from 'react'

const Experience = () => {
  return (
    <div>
      <Navbar/>
      <section className='md:px-40 px-6 flex flex-col gap-6 mt-24'>
        {experienceData.map((data, id) => {
          return(
            <div key={id}>
                <div className='mb-3 text-xl mt-4'>{id+1}. {data.title}</div>
                <ul className='flex flex-col gap-4 text-[#737d3c] ms-6'>
                    {data.points.map((point, i) => {
                        return (
                            <li key={i} className='flex gap-3 items-center'><div className='w-1.5 h-1.5 bg-black'></div><p>{point}</p></li>
                        )
                    })}
                </ul>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Experience