import Navbar from '@/components/Navbar'
import React from 'react'
import { achievements } from '@/consts/data'

const awards = () => {
  return (
    <div>
      <div><Navbar /></div>
      <section className='md:px-40 px-6 flex flex-col gap-6 mt-28 text-green-900'>
        <ol style={{ listStyle: "revert" }}>
          {achievements.map((data, id) => {
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

export default awards