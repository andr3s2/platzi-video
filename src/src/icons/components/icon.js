import React from 'react'

export default function Icon (props) {

  const {size} = props

  return (
    <div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" fill='red'>
        {props.children}
      </svg>
    </div>
  )
}