import React from 'react'

async function page({params}){
    const name = await params.name
  return (
    <div>
        this is dynamic route, you typed {name}
    </div>
  )
}

export default page