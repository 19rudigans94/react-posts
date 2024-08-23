import React, { children } from 'react'

export default function MyButton({ children, onClick }) {
  return (
    <button className='my-button bg-red-500 hover:bg-red-600 rounded p-1' onClick={onClick}>{children}</button>
  )
}
