import React from 'react'

export default function MyButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>{props.children}</button>
  )
}
