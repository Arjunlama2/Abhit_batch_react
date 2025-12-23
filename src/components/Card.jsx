import React from 'react'

function Card({ data }) {

    return (
        <div className='border-8'>
        <div className='h-[236px]'>
            <div className='bg-[#F6F7FB] p-[45px] flex justify-center items-center '>
                <img src={data.image} alt="" height={175} width={175} className='h-[175px] w-[175px]' />
            </div >
            <div className='flex items-center justify-center flex-col gap-6  bg-accent '>
                <p className='text-[#FB2E86] font-bold'>{data.title}</p>
                <p className='text-[#151875]'>Code - Y523201</p>
                <p className='text-[#151875]'>$42.00</p>
            </div>
</div>
        </div>
    )
}

export default Card