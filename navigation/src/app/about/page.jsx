import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            This is about page

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