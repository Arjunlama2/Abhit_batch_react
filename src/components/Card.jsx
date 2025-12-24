import { useNavigate } from "react-router";
import { CiShoppingCart } from "react-icons/ci";

import { CiHeart } from "react-icons/ci";
import { BsZoomIn } from "react-icons/bs";

function Card({ data }) {


  const navigate = useNavigate()
  return (
    <div className="w-[270px] bg-white shadow-md group relative"  >
      <div className="flex flex-col items-center ">
        <div className="bg-[#F6F7FB] p-[45px] flex justify-center items-center">
          <img
            src={data.image}
            alt=""
            className="h-[175px] w-[175px]"
          />

        </div>
        <div>
          <button className="bg-green-400 hidden absolute  top-[220px] right-14 z-5 group-hover:block px-12  py-2 text-2xl rounded-[5px] ">View</button>
        </div>


      </div>


      <div className="flex flex-col items-center gap-2 py-4 mt-2 p-4 group-hover:bg-black/30">
        <p className="text-[#FB2E86] font-bold">{data.title}</p>
        <p className="text-[#151875]">{data.category}</p>
        <p className="text-[#151875]">$ {data.price}</p>
      </div>



      <div className="hidden group-hover:flex absolute top-5 gap-8  left-3">
     <CiShoppingCart />
     <CiHeart />
     <BsZoomIn />
      </div>
    </div>
  );
}

export default Card