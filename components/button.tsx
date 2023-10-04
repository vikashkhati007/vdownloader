import React from 'react'

const Button = ({text,onClick}:any) => {
  return (
    <div>
      <button onClick={onClick} className={`border px-4 py-2 rounded-md bg-[#D80032] text-white font-bold hover:bg-white hover:text-[#D80032] shadow`}>{text}</button>
    </div>
  )
}

export default Button
