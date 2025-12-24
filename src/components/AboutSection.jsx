import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "./Card";



function AboutSection(props) {
const [data,setData]=useState(null)

  
async function fetchData() {
  try{
    const response=await  fetch('https://fakestoreapi.com/products')
    const data=await response.json()
    setData(data)
  }catch(err){
    console.log(err)
  }
  
}

useEffect(()=>{
fetchData()
},[])

  return (
    <div className="grid  gap-10  justify-center  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
     >
     
      {
        data?.map((el)=>{
          return <Card data={el} key={el.id}/>
        })
      }
    </div>
  );
}

export default AboutSection;
