import React from 'react';
import data from '../../../data/db.json'; // Correctly import db.json data
import star from '../../assets/star.svg';
import starOrange from '../../assets/starOrange.svg';

const MenusDisplay = () => {
  return (
    <section className="pl-[24px] pr-[24px] lg:pl-[80px] lg:pr-[80px] font-'Red Hat Display' flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
        {/* Spaghetti Menu */}
        <div className="w-full">
          {data.spaghetti.map((menuItem) => (
            <div className="relative overflow-hidden shadow-lg" key={menuItem.id}>
              <div className="relative">
                <img
                  src={menuItem.bg}
                  loading="lazy"
                  alt={menuItem.name}
                  className="w-full h-72 object-cover"
                />
                <div className="topbg2 absolute top-[-30px] left-[70px]">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food w-24 h-24 z-[100]"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#FF8C00] p-4">
                  <div className="firstPara">
                    <p className="text-lg font-semibold">{menuItem.name}</p>
                    <p className="text-sm">{menuItem.discription}</p>
                  </div>
                  <div className="secondPara flex justify-between items-center w-full mt-4">
                    <p className="flex items-center">
                      <img src={starOrange} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="font-bold">{menuItem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Robaked Menu */}
        <div className="w-full">
          {data.Robaked.map((menuItem) => (
            <div className="relative overflow-hidden shadow-lg" key={menuItem.id}>
              <div className="relative">
                <img
                  src={menuItem.bg}
                  loading="lazy"
                  alt={menuItem.name}
                  className="w-full h-72 object-cover"
                />
                <div className="topbg2 absolute top-[-30px] left-[70px]">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food w-24 h-24"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#FF8C00] p-4">
                  <div className="firstPara">
                    <p className="text-lg font-semibold">{menuItem.name}</p>
                    <p className="text-sm">{menuItem.discription}</p>
                  </div>
                  <div className="secondPara flex justify-between items-center w-full mt-4">
                    <p className="flex items-center">
                      <img src={starOrange} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="font-bold">{menuItem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dream Menu */}
        <div className="w-full">
          {data.Dream.map((menuItem) => (
            <div className="relative overflow-hidden shadow-lg" key={menuItem.id}>
              <div className="relative">
                <img
                  src={menuItem.bg}
                  loading="lazy"
                  alt={menuItem.name}
                  className="w-full h-72 object-cover"
                />
                <div className="topbg2 absolute top-[-30px] left-[70px]">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className=" food  w-24 h-24"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#FF8C00] p-4">
                  <div className="firstPara">
                    <p className="text-lg font-semibold">{menuItem.name}</p>
                    <p className="text-sm">{menuItem.discription}</p>
                  </div>
                  <div className="secondPara flex justify-between items-center w-full mt-4">
                    <p className="flex items-center">
                      <img src={starOrange} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="font-bold">{menuItem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pepper Menu */}
        <div className="w-full">
          {data.Pepper.map((menuItem) => (
            <div className="relative overflow-hidden shadow-lg" key={menuItem.id}>
              <div className="relative">
                <img
                  src={menuItem.bg}
                  loading="lazy"
                  alt={menuItem.name}
                  className="w-full h-72 object-cover"
                />
                <div className="topbg2 absolute top-[-30px] left-[70px]">
                  <img
                    src={menuItem.food}
                    loading="lazy"
                    alt={menuItem.name}
                    className="food w-24 h-24"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#FF8C00] p-4">
                  <div className="firstPara">
                    <p className="text-lg font-semibold">{menuItem.name}</p>
                    <p className="text-sm">{menuItem.discription}</p>
                  </div>
                  <div className="secondPara flex justify-between items-center w-full mt-4">
                    <p className="flex items-center">
                      <img src={starOrange} alt="star icon" className="w-4 h-4 mr-1" />
                      {menuItem.rate}
                    </p>
                    <p className="font-bold">{menuItem.amount}</p>
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
