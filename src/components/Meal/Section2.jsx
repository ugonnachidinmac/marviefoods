import React from 'react'
import {Image} from 'cloudinary-react';

const Section2 = () => {
  return (
    <>
     <section className="w-full pl-[24px] pr-[24px] lg:pl-[80px] lg:mb-[120px] lg:pr-[80px]  font-'Red Hat Display' flex flex-col lg:flex-row gap-[10px] justify-center items-center ">
        
        <div className='bg-white md:w-[320px] lg:w-[320px]  rounded-[20px] w-full'>
        <div className='flex flex-col justify-center items-center md:w-[320px] lg:w-[320px]  pt-[54px] pb-[24px] pl-[46px] pr-[46px]'>
            <Image className='w-[96px] lg:h-[96px]' loading='lazy' cloudName="dqtyrjpeh" 
          publicId= "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729519151/ep_food_gx4rwb.png">
          </Image>
          <p className='text-[26px] font-bold  mt-[39px] mb-[13px] text-center w-full'>Choose Your Meal</p>
          <p  className='text-[14px] font-medium  mb-[54px] text-center'>Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus consectetur quisque in. Scelerisque ipsum ipsum nisi.</p>
            </div>
        </div>


        
        <div className='bg-[#FF8C00] md:w-[320px] lg:w-[320px]  rounded-[20px] w-full'>
            <div className='flex flex-col justify-center items-center md:w-[320px] lg:w-[320px]  pt-[54px] pb-[24px] pl-[46px] pr-[46px]'>
            <Image className='w-[96px]' loading='lazy' cloudName="dqtyrjpeh" 
          publicId= "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729519151/gridicons_phone_mb2fvy.png">
          </Image>
          <p className='text-[26px] font-bold text-white mt-[39px] mb-[13px] text-center'>Choose Your Meal</p>
          <p className='text-[14px] font-medium text-white  mb-[54px] text-center'>Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus consectetur quisque in. Scelerisque ipsum ipsum nisi.</p>
            </div>
        </div>
      

        
        <div className='bg-white md:w-[320px] lg:w-[320px]  rounded-[20px] w-full'>
        <div className='flex flex-col justify-center items-center md:w-[320px] lg:w-[320px]  pt-[54px] pb-[24px] pl-[46px] pr-[46px]'>
            <Image className=' ' loading='lazy' cloudName="dqtyrjpeh" 
          publicId= "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729519151/game-icons_chicken-oven_vbwdv3.png">
          </Image>
          <p  className='text-[26px] font-bold  mt-[39px] mb-[13px] text-center'>Choose Your Meal</p>
          <p className='text-[14px] font-medium  mb-[54px] text-center'>Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus consectetur quisque in. Scelerisque ipsum ipsum nisi.</p>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Section2;