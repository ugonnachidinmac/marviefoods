import React from 'react';
import data from '../../../data/db.json'; // Correctly import db.json data
import star from '../../assets/star.svg';
import starOrange from '../../assets/starOrange.svg';

const MenusDisplay = () => {
  return (
   <>
 <section className='w-full mt-[80px]  px-[24px] lg:px-[80px] font-"Red Hat Display" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[35px] justify-center items-center'>

 <div className="w-full mb-[55px]  ">
          {data.spaghetti.map((menuItem) => (
            <div className="   w-full" key={menuItem.id}>
              <div className="relative bg-[#FF8C00] rounded-tl-[70px] rounded-br-[70px] lg:w-[250px] w-full min-h-[360px]">
                <div className="flex justify-center  w-full">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food absolute top-[-80px] w-[215px] z-[100]"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center text-center text-white  w-full mt-[170px] ">
                  <div className="w-full lg:w-[239px]">
                    <p className="text-[24px] font-bold ">{menuItem.name}</p>
                    <p className="text-[12px] text-center mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex gap-[90px] justify-center items-center w-full mt-8">
                    <p className="flex items-center text-lg font-medium">
                      <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="text-lg font-medium">{menuItem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
 <div className="w-full mb-[55px]  ">
          {data.Robaked.map((menuItem) => (
            <div className="   w-full" key={menuItem.id}>
              <div className="relative bg-[#FFE8CC] rounded-tl-[70px] rounded-br-[70px] lg:w-[250px] w-full min-h-[360px]">
                <div className="flex justify-center  w-full">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food absolute top-[-80px] w-[215px] z-[100]"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center text-center text-[#FF8C00]  w-full mt-[170px] ">
                  <div className="w-full lg:w-[239px]">
                    <p className="text-[24px] font-bold ">{menuItem.name}</p>
                    <p className="text-[12px] text-center mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex gap-[90px] justify-center items-center w-full mt-8">
                    <p className="flex items-center text-lg font-medium">
                      <img src={starOrange} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="text-lg font-medium">{menuItem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
 <div className="w-full mb-[55px]  ">
          {data.Dream.map((menuItem) => (
            <div className="   w-full" key={menuItem.id}>
              <div className="relative bg-[#FF8C00] rounded-tl-[70px] rounded-br-[70px] lg:w-[250px] w-full min-h-[360px]">
                <div className="flex justify-center  w-full">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food absolute top-[-80px] w-[215px] z-[100]"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center text-center text-white  w-full mt-[170px] ">
                  <div className="w-full lg:w-[239px]">
                    <p className="text-[24px] font-bold ">{menuItem.name}</p>
                    <p className="text-[12px] text-center mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex gap-[90px] justify-center items-center w-full mt-8">
                    <p className="flex items-center text-lg font-medium">
                      <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="text-lg font-medium">{menuItem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
 <div className="w-full mb-[55px]  ">
          {data.Pepper.map((menuItem) => (
            <div className="   w-full" key={menuItem.id}>
              <div className="relative bg-[#FF8C00] rounded-tl-[70px] rounded-br-[70px] lg:w-[250px] w-full min-h-[360px]">
                <div className="flex justify-center  w-full">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food absolute top-[-80px] w-[215px] z-[100]"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center text-center text-white  w-full mt-[170px] ">
                  <div className="w-full lg:w-[239px]">
                    <p className="text-[24px] font-bold ">{menuItem.name}</p>
                    <p className="text-[12px] text-center mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex gap-[90px] justify-center items-center w-full mt-8">
                    <p className="flex items-center text-lg font-medium">
                      <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="text-lg font-medium">{menuItem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
   </section>
   </>
  );
};

export default MenusDisplay;
