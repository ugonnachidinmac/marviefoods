import React from 'react'
import { Image } from 'cloudinary-react';

const GalSection2 = () => {
  return (
    <section className='px-4 sm:px-6 lg:px-16 font-"Red Hat Display" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center'>
      <div className="pic1 flex flex-col">
        <div>
          <Image className='w-full h-auto' loading='lazy' cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729518676/Rectangle_5_llfoxj.png" />
        </div>
        <div>
          <Image className='w-full h-auto' loading='lazy' cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729518676/Rectangle_6_kltpzu.png" />
        </div>
      </div>

      <div className="relative">
        <Image className="w-full h-auto" loading="lazy" cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729518675/picture_set_2_oefkuo.png" />
        <div className="absolute inset-0 p-4 sm:p-6 text-white flex flex-col justify-end">
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold mb-2">Conducive Sit-Out <br /> Place/Coffee lounge</p>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px]">Lorem ipsum dolor sit amet consectetur. Amet tristique lobortis morbi morbi integer mus ultrices.</p>
        </div>
      </div>

      <div className="pic3">
        <Image className='w-full h-auto' loading='lazy' cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729518677/picture_set_3_qqoagp.png" />
      </div>

      <div className="pic4 flex flex-col">
        <div>
          <Image className='w-full h-auto' loading='lazy' cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729518675/Rectangle_7_o0z7a0.png" />
        </div>
        <div>
          <Image className='w-full h-auto' loading='lazy' cloudName="dqtyrjpeh"
            publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729518676/Rectangle_8_trt77z.png" />
        </div>
      </div>
    </section>
  )
}

export default GalSection2
