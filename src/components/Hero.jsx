import React from 'react'

function Hero({data}) {

  console.log(data)
  return (
    <div className=''>
      {
        data.title
      }
    </div>
  )
}

export default Hero