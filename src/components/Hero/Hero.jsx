import React from 'react'
import { Image } from "cloudinary-react";

const Hero = () => {
  return (
    <>
      <div className="h-[880px] lg:h-[610px] relative w-full pb-[65px]">
        {/* Image for desktop and tablet (hidden on mobile) */}
        <Image
          className="imagebgdesktop hidden md:block relative top-0 left-0 h-[605px] w-full"
          cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729779278/mavHero.png_e22mib.jpg"
          loading="lazy"
        />
        
        {/* Image for mobile (hidden on tablet and desktop) */}
        <Image
          className="imagebgmobile block md:hidden relative top-0 left-0 h-[874px] w-full"
          cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729780853/Rectangle_1_3_yjqcyb.png"
          loading="lazy"
        />

        <div className="w-full absolute top-[70px] lg:top-[170px] pl-[27px] pr-[27px] lg:pr-[80px] lg:pl-[80px] md:w-[349px] lg:w-[580px] text-white font-'Red Hat Display'">
          <p className="text-[30px] lg:text-[44px] font-bold mb-[20px]">
            Taste Your Heart in Every Bite You Take
          </p>
          <p className="text-[14px] lg:text-[18px] font-normal mb-[25px] w-full">
            Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum. Magna commodo condimentum urna rhoncus.
          </p>
          <button className="text-white  lg:w-[208px] bg-[#FF8C00] text-[20px] rounded-[10px] pl-[10px] pr-[10px] pb-[10px] pt-[10px] font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero;
