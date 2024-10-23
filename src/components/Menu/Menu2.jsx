import React from 'react';
import data from '../../../data/db.json'; // Correctly import db.json data
import star from '../../assets/star.svg';

const Menu = () => {
  return (
    <section className="py-8">
      <div className="text-center mb-6">
        <p className="text-3xl font-bold">Our Menu</p>
        <p className="">Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum.</p>
      </div>

      <div className="menuList flex gap-8">
        {data.menu.map((menuItem) => (
          <div className="relative  overflow-hidden shadow-lg" key={menuItem.id}>
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
                className="  w-24 h-24"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#FF8C00]  p-4">
              <div className="firstPara">
                <p className="text-lg font-semibold">{menuItem.name}</p>
                <p className="text-sm">{menuItem.discription}</p>
              </div>
              <div className="secondPara flex justify-between items-center w-full mt-4">
                <p className="flex items-center">
                  <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                  {menuItem.rate}
                </p>
                <p className="font-bold">{menuItem.amount}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
