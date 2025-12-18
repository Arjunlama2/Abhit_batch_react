import React from "react";

function AboutSection({ data }) {
  return (
    <div className="flex gap-6 justify-around flex-wrap">
      {data.map((el, index) => (
        <div
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
      ))}
    </div>
  );
}

export default AboutSection;
