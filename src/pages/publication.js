import Navbar from '@/components/Navbar'
import React from 'react'
import {  publicationData } from '@/consts/data'
const publication = () => {
  return (
    <div>
      <Navbar />
      <section className='md:px-40 px-6 flex flex-col gap-6 mt-24'>
      <p className='font-bold text-red-900'>Journals</p>
        <ol>
          {publicationData.map((data, id) => {
            return (
              <li className='italic' key={id}>
                {data}
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}

export default publication