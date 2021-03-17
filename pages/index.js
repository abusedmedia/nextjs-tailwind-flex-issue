import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import LogWidth from '../components/LogWidth.js'

export default function Home() {
  return (

        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <LogWidth />
          </div>
          <div className='flex-1'>
            <LogWidth />
          </div>
        </div>

        // <div className='wrapper'>
        //   <div className='child'>
        //     <LogWidth />
        //   </div>
        //   <div className='child'>
        //     <LogWidth />
        //   </div>
        // </div>
     
  )
}
