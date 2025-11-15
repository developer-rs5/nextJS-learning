"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    return (
        <div>
            This is about page
            <Image
                src={"/vercel.svg"}
                alt='kkuch nahi . '
                width={200}
                height={200}
            />
            

            <button onClick={()=>router.push("https://google.com")} className='h-10 w-30 bg-blue-400 rounded-2xl hover:bg-black hover:border m-30 hover:cursor-pointer ' >
                open google
            </button>

            

            <Image
                src={"/img.jpg"}
                alt='noting.'
                width={200}
                height={200}
            />
            
        </div>
    )
}

export default page