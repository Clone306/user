import React from 'react'
import {default as photo} from "./download 2.png"
export default function Users (props) {
    const {img,fname ,lname} = props
    console.log()
  return (
    <div className='profile'>
        <img src={img?img:photo} className='img' alt="" />
      <h1>{fname} {lname}</h1>
    
    </div>
  )
}
