import React from 'react'

async function page({params}) {
  const name = await params
  console.log(name)
  return (
    <div>all-route-sagment\[...name]</div>
  )
  
}
export default page