import Navbar from '@/components/Navbar'
import React from 'react'
import { professors } from '@/consts/data'

const collaborators = () => {
  return (
    <div>
      <div><Navbar /></div>
      <section className='md:px-40 px-6 flex flex-col gap-6 mt-28 text-green-900'>
        <ol style={{ listStyle: "revert" }}>
          {professors.map((data, id) => {
            return (
              <li key={id}>
                <a href={data.link} className='underline'>{data.name}</a>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}

export default collaborators
