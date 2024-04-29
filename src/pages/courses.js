import Navbar from '@/components/Navbar'
import React from 'react'
import { subjects } from '@/consts/data'
const courses = () => {
  return (
    <div>
      <Navbar />
      <section className='md:px-40 px-6 flex flex-col gap-6 mt-24'>
      <p>Courses</p>
        <ul style={{listStyle:"revert"}}>
          {subjects.map((data, id) => {
            return (
              <li key={id}>
                {data}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default courses