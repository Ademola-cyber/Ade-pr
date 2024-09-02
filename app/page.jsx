"use client"
import Component2 from '@/component/Component2'
import Component1 from '@/component/Component1'
import React from 'react'
import { useState, useEffect } from 'react'
import Component3 from '@/component/Component3'

const page = () => {
    // react hook
    // usestate, useEffect
    const x = 200
   // let count = 0
   // count++

   // usestate
   const [count, setCount] = useState(0)

   const handleCount = () => {
    setCount(count + 1)
   }

   const handleCountDown = () => {
    setCount(count - 1)
   }

    // useEffect 
    useEffect(
        ()=>{
            console.log('Button Clicked');
            
        }, [count]
    )  

  //  let userName = prompt("enter your name")

  return (
    <>
            <h1 className='text-5xl'>
                this is a master branch
            </h1>


        <div className="bg-slate-600 text-white text-3xl text-center uppercase p-2">
            <p>
                hello, {x}
            </p>
        </div>
        <div className="flex gap-2">
            <Component1/>
            <Component2/>
        </div>


            <main className='flex items-center justify-center h-dvh'>
                <Component3/>

            </main>

        <main className='flex items-center justify-center h-dvh gap-10'>
            <button 
                // onClick={
                  //  ()=> console.log("hello")    
               // }

               onClick={handleCount}
            className='text-3xl bg-blue-600 text-white  p-4 rounded-lg font-bold hover:bg-blue-700'>Click
            </button>
            <button 
               onClick={handleCountDown}
            className='text-3xl bg-green-600 text-white  p-4 rounded-lg font-bold hover:bg-green-700'>Click
            </button>
            <p>You have clicked {count} times</p>
        </main>

    </>
  )
}

export default page
