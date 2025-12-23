function Card({ data }) {
  return (
    <div className="w-[270px] bg-white shadow-md ">
      <div className="h-[236px]">
        <div className="bg-[#F6F7FB] p-[45px] flex justify-center items-center">
          <img
            src={data.image}
            alt=""
            className="h-[175px] w-[175px]"
          />
        </div>

       
      </div>
       <div className="flex flex-col items-center gap-2 py-4">
          <p className="text-[#FB2E86] font-bold">{data.title}</p>
          <p className="text-[#151875]">Code - Y523201</p>
          <p className="text-[#151875]">$42.00</p>
        </div>
    </div>
  );
}

export default Card