import React from 'react'
import { Image } from "cloudinary-react";

const Hero = () => {
  return (
    <>
    <div className="relative h-[316px] flex items-center justify-center flex-col">
        <Image className="absolute top-0 left-0 h-[316px] w-full"  cloudName="dqtyrjpeh" publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729562158/Hero_Container_auejsp.png"    loading="lazy" />
        <div className="flex items-center justify-center flex-col gap-2">
       
          <p>welcome</p>
        </div>
      </div>
    
    </>
  )
}

export default Hero