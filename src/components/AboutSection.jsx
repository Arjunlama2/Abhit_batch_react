import React from "react";
import { useNavigate } from "react-router";
import Card from "./Card";




function AboutSection(props) {
  const navigate = useNavigate()
  const displayData = (index) => {
    navigate(`/about/${index}`)
  }

  const { data } = props
  return (
    <div className="grid gap-36   md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
      {/* {data?.map((el, index) => {
        return <div
          key={index}
          onClick={() => displayData(index)}
          className="relative w-36 h-52 bg-cover bg-center rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          style={{ backgroundImage: `url(${el.image})` }}
        >

          <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>

          <div className="absolute bottom-0 p-3 text-white">
            <p className="font-bold text-sm">{el.title}</p>
            <p className="text-xs ">{el.decription}</p>
          </div>
        </div>
      }
      )} */}

      {
        data.map((el,index)=>{
          return <Card data={el}/>
        })
      }
    </div>
  );
}

export default AboutSection;
