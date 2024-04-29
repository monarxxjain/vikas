import Navbar from '@/components/Navbar'
import React from 'react'
import {  publicationData } from '@/consts/data'
const publication = () => {
  return (
    <div>
      <Navbar />
      <section className='px-40 flex flex-col gap-6 mt-24'>
      <p className='font-bold text-red-900'>Journals</p>
        <ol>
          {publicationData.map((data, id) => {
            return (
              <li key={id}>
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