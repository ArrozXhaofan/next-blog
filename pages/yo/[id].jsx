import React from 'react'


export default function dinamico({data}) {
  return (

    <div className='bg-neutral-600 min-h-screen text-white'>


        <h1>{data.id} - {data.title}</h1>

        <p>{data.body}</p>

    </div>
  )
}

export async function getStaticPaths(){

    try {
        
        let url = 'https://jsonplaceholder.typicode.com/todos/'

        const res = await fetch(url)
        const data = await res.json()

        const paths = data.map(({id}) => ({params: {id: `${id}`}}))

        return {
            paths,
            fallback: false,
        }

    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({params}){

    try {
        
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + params.id)
        const data = await res.json()

        return {
            props:{
                data
            }
        }

    } catch (error) {
        console.log(error);
    }

}