import React from 'react'

export default function MyButton(props) {
  return (
    <button className='my-button bg-red-500 hover:bg-red-600 rounded p-1' onClick={props.onClick}>{props.children}</button>
  )
}
