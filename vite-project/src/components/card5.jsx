import React from 'react'

function Card5({img,img1,h1,p}) {
  return (
    <div>
         <div id="card" className="lg:w-[328px] flex flex-col gap-[20px] py-[35px] px-[40px] items-start">
        <img src={img} alt="" />
        <h1 className='font-[700] text-[24px]'>{h1}</h1>
        <img src={img1} alt="" />
        <p>{p}</p>
       </div>
      
    </div>
  )
}

export default Card5
