import React, { useState } from 'react'
import Link from 'next/link'

function index({data}) {
  return (
    <div className='min-h-screen bg-neutral-700 text-white'>
        

        {
            data.map(({id}) => (


                <Link href={`/yo/${id}`} key={id}>
                    <h3>{id}</h3>
                </Link>
            ))
        }



    </div>
  )
}

export default index


export async function getStaticProps(){

    try {
        
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const data = await res.json()
      
        return {
            props:{
                data
            }
        }

    } catch (error) {
        
    }
}