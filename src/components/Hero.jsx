import React from 'react'

function Hero(props) {
const {data}=props
  return (
    <div className=''>
      {
        data.title
      }

      <input type="date" name="" id="" />
    </div>
  )
}

export default Hero