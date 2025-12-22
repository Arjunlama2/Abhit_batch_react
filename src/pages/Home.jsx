import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
const aboutdata=[
  {
    title:"Training and Education",
    image:"https://plus.unsplash.com/premium_photo-1696879451541-5fea16c62500?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    decription:"lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam eum veritatis dignissimos vel distinctio cumque sequi quaerat quia rerum ipsum error, odit qui. Sint repudiandae quisquam ullam porro sapiente."
  
  },
   {
    title:"Tours and Travel",
    image:"https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    decription:"lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam eum veritatis dignissimos vel distinctio cumque sequi quaerat quia rerum ipsum error, odit qui. Sint repudiandae quisquam ullam porro sapiente."
  }, {
    title:"App and software Education",
    image:"https://images.unsplash.com/photo-1765915968433-86d4d13ae1a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    decription:"lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam eum veritatis dignissimos vel distinctio cumque sequi quaerat quia rerum ipsum error, odit qui. Sint repudiandae quisquam ullam porro sapiente."
  }
]

function Home() {
  let herodata={
    title:"This is the title",
  
  }

  return (
   < >
  
   <div className='container '>
  <Hero data={herodata} />
  <AboutSection data={aboutdata}/>
   </div>

 
   </>
  )
}

export default Home