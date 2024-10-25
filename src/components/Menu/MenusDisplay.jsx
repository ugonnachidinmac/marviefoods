import React from 'react';
import data from '../../../data/db.json'; // Correctly import db.json data
import star from '../../assets/star.svg';
import starOrange from '../../assets/starOrange.svg';

const MenusDisplay = () => {
  return (
    <section className="pl-6 pr-6 lg:pl-20 lg:pr-20 font-'Red Hat Display' flex flex-col justify-center items-center mt-20 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Spaghetti Menu */}
        <div className="w-full">
          {data.spaghetti.map((menuItem) => (
            <div className="relative overflow-visible shadow-lg w-full" key={menuItem.id}>
              <div className="bg-[#FF8C00] rounded-tl-[70px] rounded-br-[70px] lg:w-[290px] w-full min-h-[360px]">
                <div className="flex justify-center">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food w-[225px] z-[100] relative -mt-20"
                  />
                </div>
                <div className="absolute top-[120px] inset-0 flex flex-col justify-center items-center text-center text-white mx-6 my-8">
                  <div>
                    <p className="text-2xl font-bold lg:w-[239px]">{menuItem.name}</p>
                    <p className="text-sm mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex justify-between items-center w-full mt-8">
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

        {/* Robaked Menu */}
        <div className="w-full">
          {data.Robaked.map((menuItem) => (
            <div className="relative overflow-visible shadow-lg w-full" key={menuItem.id}>
              <div className="bg-[#FFE8CC] rounded-tl-[70px] rounded-br-[70px] lg:w-[290px] w-full min-h-[360px]">
                <div className="flex justify-center">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food w-[225px] z-[100] relative -mt-20"
                  />
                </div>
                <div className="absolute top-[120px]  inset-0 flex flex-col justify-center items-center text-center text-[#FF8C00] mx-6 my-8">
                  <div>
                    <p className="text-2xl font-bold lg:w-[239px]">{menuItem.name}</p>
                    <p className="text-sm mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex justify-between items-center w-full mt-8">
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

        {/* Dream Menu */}
        <div className="w-full">
          {data.Dream.map((menuItem) => (
            <div className="relative overflow-visible shadow-lg w-full" key={menuItem.id}>
              <div className="bg-[#FF8C00] rounded-tl-[70px] rounded-br-[70px] lg:w-[290px] w-full min-h-[360px]">
                <div className="flex justify-center">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food w-[225px] z-[100] relative -mt-20"
                  />
                </div>
                <div className="absolute top-[120px]  inset-0 flex flex-col justify-center items-center text-center text-white mx-6 my-8">
                  <div>
                    <p className="text-2xl font-bold lg:w-[239px]">{menuItem.name}</p>
                    <p className="text-sm mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex justify-between items-center w-full mt-8">
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

        {/* Pepper Menu */}
        <div className="w-full">
          {data.Pepper.map((menuItem) => (
            <div className="relative overflow-visible shadow-lg w-full" key={menuItem.id}>
              <div className="bg-[#FF8C00] rounded-tl-[70px] rounded-br-[70px] lg:w-[290px] w-full min-h-[360px]">
                <div className="flex justify-center">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food w-[225px] z-[100] relative -mt-20"
                  />
                </div>
                <div className="absolute top-[120px]  inset-0 flex flex-col justify-center items-center text-center text-white mx-6 my-8">
                  <div>
                    <p className="text-2xl font-bold lg:w-[239px]">{menuItem.name}</p>
                    <p className="text-sm mt-2">{menuItem.discription}</p>
                  </div>
                  <div className="flex justify-between items-center w-full mt-8">
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
      </div>
    </section>
  );
};

export default MenusDisplay;
