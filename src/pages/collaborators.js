import Navbar from '@/components/Navbar'
import React from 'react'
import { professors } from '@/consts/data'

const collaborators = () => {
  return (
    <div>
      <div><Navbar /></div>
      <section className='px-40 flex flex-col gap-6 mt-28 text-green-900'>
        <ol style={{ listStyle: "revert" }}>
          {professors.map((data, id) => {
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

export default collaborators
