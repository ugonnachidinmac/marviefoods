import React from 'react'
import apple from '../../assets/apple.svg'
import { Image } from "cloudinary-react";

const DownloadContainer = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row gap-[93px] pt-[40px] lg:pt-[118px] pr-[24px] lg:pr-[80px] pb-[118px] pl-[24px] lg:pl-[80px]'>
    <div className="">
        <Image className="w-full lg:w-[701px]"  cloudName="dqtyrjpeh" publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729564135/food_plate_about_1_pefilg.png"    loading="lazy" />
    </div>
    <div className='w-full lg:w-[466px] lg:pt-[44.5px]'>
        <p className='text-[26px] font-normal text-[#FF8C00] mb-[35px] font-"Red Hat Display" '>A Bite into a Journey. A Journey into your Heart. Come Join us.</p>
        <p className='text-[18px] font-normal line-[27px] mb-[35px]'>Lorem ipsum dolor sit amet consectetur. Ut sed non tristique tincidunt. Nibh nunc bibendum leo ultricies orci. Viverra ultrices risus porttitor odio cursus lorem tincidunt sit. Quis euismod sollicitudin enim nibh amet porttitor sit. Nunc eu vitae eget senectus amet ornare risus. Lectus purus fames donec tempor. Quis euismod sollicitudin enim nibh amet porttitor sit.</p>
    
    <div className=' apps flex flex-col md:flex-row lg:flex-row gap-[30px]'> 
    <div className="">
        <Image className="w-[215px] lg:w-full"  cloudName="dqtyrjpeh" publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729565210/Group_7_cdfjh3.png"    loading="lazy" />
    </div>
    <div className="">
        <Image className="w-[215px] lg:w-full"  cloudName="dqtyrjpeh" publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729565210/googleplay_hwangj.png"    loading="lazy" />
    </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default DownloadContainer