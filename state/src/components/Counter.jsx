import React, { useState } from 'react'

function Counter() {
  const [count , setCount] = useState(0)
  return (
    <>
      <button className='text-white bg-black px-4 py-1 mr-8'>count {count}</button>
      <button className='text-white bg-black px-4 py-1' onClick={()  => {setCount(count + 1)}}>add</button>
      <button className='text-white bg-black px-4 py-1 ml-8' onClick={()  => {setCount(count - 1)}}>sub</button>
    </>
  )
}

export default Counter