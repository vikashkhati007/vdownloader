import React from 'react'

const Button = ({text,onclick}:any) => {
  return (
    <div>
      <button onClick={onclick} className='border px-4 py-2 rounded-md bg-red-600 text-white font-bold hover:bg-red-500 shadow'>{text}</button>
    </div>
  )
}

export default Button
