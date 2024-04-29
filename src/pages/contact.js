import Navbar from '@/components/Navbar'
import React from 'react'
import { contacts } from '@/consts/data'

const contact = () => {
    return (
        <div>
            <div><Navbar /></div>
            <section className='md:px-40 px-6 flex flex-col gap-6 mt-28 text-green-900'>
                <h1 class="text-2xl font-bold mb-4">Contact Information for Vikas Kumar Tiwari</h1>
                <div class="contact-info">
                    <p class="mb-2"><span class="font-bold">Email:</span> <a href="mailto:vikasiet49@gmail.com" class="text-blue-500">vikasiet49@gmail.com</a></p>
                    <p class="mb-2"><span class="font-bold">Alternate Email:</span> <a href="mailto:vikaskumartiwari8454@gmail.com" class="text-blue-500">vikaskumartiwari8454@gmail.com</a></p>
                    <p class="mb-2"><span class="font-bold">Institute Email:</span> <a href="mailto:rcs23102@iiitl.ac.in" class="text-blue-500">rcs23102@iiitl.ac.in</a></p>
                    <p class="mb-2"><span class="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/vikas-kumar-tiwari-32463b207/" target="_blank" class="text-blue-500">Vikas Kumar Tiwari</a></p>
                    <p class="mb-2"><span class="font-bold">Github:</span> <a href="https://github.com/vikasiiitl" class="text-blue-500">vikasiiitl</a></p>
                    <p class="mb-2"><span class="font-bold">Social Media:</span> <a href="https://www.facebook.com/vikasiiit/" class="text-blue-500">Facebook</a>, <a href="https://www.instagram.com/vikas_iiit/" class="text-blue-500">Instagram</a></p>
                    <p><span class="font-bold">Contact:</span> 9670735966</p>
                </div>
            </section>
        </div>
    )
}

export default contact