import React from "react";

function AboutSection(props) {
  const {data}=props
  return (
    <div className="grid justify-center items-center gap-1.5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {data?.map((el, index) =>{
       return  <div
          key={index}
          className="relative w-36 h-52 bg-cover bg-center rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          style={{ backgroundImage: `url(${el.image})` }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>

          <div className="absolute bottom-0 p-3 text-white">
            <p className="font-bold text-sm">{el.title}</p>
            <p className="text-xs ">{el.decription}</p>
          </div>
        </div>
      }
      )}
    </div>
  );
}

export default AboutSection;
