import React from 'react'
import './Blury.css'
const Blury = () => {
  return (
    <>
    <section className='bg'  style={{filter:blur(0)}}></section>
    <div className='loading-text' style={{opacity:0}}></div>
    </>
  )
}

export default Blury