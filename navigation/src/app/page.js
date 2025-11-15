'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  return (
    
    <div>
      <ul>
        <Link href={"/"} ><li>home</li></Link>
        <Link href={"/about"} ><li>About</li></Link>
        <Link href={"/contact"} ><li>Contact</li></Link>
      </ul>

      <button onClick={()=>router.push("https://plugins.zenuxs.in")} >GO TO ZENUXS PLUGINS</button>
    </div>  
  )
}

export default page