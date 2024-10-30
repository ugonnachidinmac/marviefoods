import React from 'react';
import star from '../../assets/star.svg';

const MenusDisplay = () => {
  return (
    <>
      <section className="pl-6 pr-6 lg:pl-20 lg:pr-20 font-red-hat-display flex flex-col justify-center items-center mt-20 w-full ">
     
      <div className=" parentToFlex grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-4 gap-10">
        <div className="relative firstBox flex flex-col items-center justify-center bg-[#FF8C00] lg:w-[290px] lg:h-[390px]">
          <div className="content absolute top-[-50px]">
            <div>
              {/* Use img instead of Image if you're not using a specific Image component */}
              <img
                className=""
                loading="lazy"
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729878914/Frame_10124_cgpsxw.png"
                alt="Spaghetti Confetti"
              />
            </div>

            <div className="">
              <div>
                <p className="text-2xl font-bold lg:w-[239px]">Spaghetti Confetti</p>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
              </div>
              <div className="flex justify-between items-center w-full mt-8">
                <p className="flex items-center text-lg font-medium">
                  <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                  4.5
                </p>
                <p className="text-lg font-medium">₦ 4,000</p>
              </div>
            </div>
          </div>
        </div>


        <div className="firstBox bg-[#FF8C00] lg:w-[290px] lg:h-[390px]">
          <div className="content">
            <div>
              {/* Use img instead of Image if you're not using a specific Image component */}
              <img
                className=""
                loading="lazy"
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729878914/Frame_10124_cgpsxw.png"
                alt="Spaghetti Confetti"
              />
            </div>

            <div className="">
              <div>
                <p className="text-2xl font-bold lg:w-[239px]">Spaghetti Confetti</p>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
              </div>
              <div className="flex justify-between items-center w-full mt-8">
                <p className="flex items-center text-lg font-medium">
                  <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                  4.5
                </p>
                <p className="text-lg font-medium">₦ 4,000</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="firstBox bg-[#FF8C00] lg:w-[290px] lg:h-[390px]">
          <div className="content">
            <div>
              {/* Use img instead of Image if you're not using a specific Image component */}
              <img
                className=""
                loading="lazy"
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729878914/Frame_10124_cgpsxw.png"
                alt="Spaghetti Confetti"
              />
            </div>

            <div className="">
              <div>
                <p className="text-2xl font-bold lg:w-[239px]">Spaghetti Confetti</p>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
              </div>
              <div className="flex justify-between items-center w-full mt-8">
                <p className="flex items-center text-lg font-medium">
                  <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                  4.5
                </p>
                <p className="text-lg font-medium">₦ 4,000</p>
              </div>
            </div>
          </div>
        </div>



        <div className="firstBox bg-[#FF8C00] lg:w-[290px] lg:h-[390px]">
          <div className="content">
            <div>
              {/* Use img instead of Image if you're not using a specific Image component */}
              <img
                className=""
                loading="lazy"
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1729878914/Frame_10124_cgpsxw.png"
                alt="Spaghetti Confetti"
              />
            </div>

            <div className="">
              <div>
                <p className="text-2xl font-bold lg:w-[239px]">Spaghetti Confetti</p>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
              </div>
              <div className="flex justify-between items-center w-full mt-8">
                <p className="flex items-center text-lg font-medium">
                  <img src={star} alt="star icon" className="w-4 h-4 mr-1" />
                  4.5
                </p>
                <p className="text-lg font-medium">₦ 4,000</p>
              </div>
            </div>
          </div>
        </div>

      </div>


      </section>
    </>
  );
};

export default MenusDisplay;
