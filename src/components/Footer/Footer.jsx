import React from "react";
import logoFooter from "../../assets/logoFooter.svg";
import logoX from "../../assets/logoX.svg";
import logoF from "../../assets/logoF.svg";
import logoT from "../../assets/logoT.svg";
import logoI from "../../assets/logoI.svg";
import arrowUp from "../../assets/arrowUp.svg";

const Footer = () => {
  return (
    <>
      <section className="footer text-left flex flex-col  lg:flex-row w-full  min-h-[380px] pl-[79.5px] pr-[79.5px] pt-[50px] lg:pb-[108px] bg-[#331C00] gap-[100px]">
        <div className="left flex  lg:flex-row gap-[100px] w-full">
          {/* Logo and About Section */}
          <div id="contact" className="flex flex-col w-full lg:w-auto">
            <div className="logoContainer flex items-center gap-[12px]">
              <img
                className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
                src={logoFooter}
                alt="LOGO"
              />
              <p className="text-[20px] lg:text-[22px] text-[#FEFEFE] font-bold font-georgia">
                Marvie Foods
              </p>
            </div>
            <div className="textAndIcon w-full max-w-[326px]">
              <p className="text-[16px] lg:text-[18px] font-normal text-[#FEFEFE] mt-[15px] font-georgia">
                Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc
                porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget
                condimentum. Magna commodo condimentum urna rhoncus.
              </p>
              <div className="flex gap-[15px] lg:gap-[25px] mt-[25px]">
                <img
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                  src={logoX}
                  alt="X logo"
                />
                <img
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                  src={logoF}
                  alt="Facebook logo"
                />
                <img
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                  src={logoT}
                  alt="Twitter logo"
                />
                <img
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                  src={logoI}
                  alt="Instagram logo"
                />
              </div>
            </div>

            <div className="hiddenBox lg:hidden mt-[40px] w-full text-[20px] lg:text-[22px] text-[#FEFEFE] font-bold">
                <div  className="flex justify-between  w-full pb-[20px]">
                  <p>Quick Links</p>
                  <img src={arrowUp} alt="" />
                </div>
                <div  className="flex justify-between w-full pb-[20px]">
                  <p>Opening hours</p>
                  <img src={arrowUp} alt="" />
                </div>
                <div className="flex justify-between  w-full">
                  <p>Contact us</p>
                  <img src={arrowUp} alt="" />
                </div>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="navigations hidden lg:flex flex-col lg:flex-row gap-[50px] w-full lg:w-auto">
            {/* Quick Links */}
            <div className="w-full lg:w-auto">
              <h4 className="text-[20px] lg:text-[22px] font-bold text-[#FEFEFE] font-georgia">
                Quick Links
              </h4>
              <ul className="text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal">
                <li className="mt-[15px] font-georgia">Home</li>
                <li className="mt-[15px] font-georgia">Menu</li>
                <li className="mt-[15px] font-georgia">About Us</li>
                <li className="mt-[15px] font-georgia">Testimonials</li>
                <li className="mt-[15px] w-[120px] font-georgia">Gallery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rightSide hidden lg:flex gap-[100px] w-full">
          {/* Opening Hours */}
          <div className="flex flex-col w-full lg:w-[250px]">
            <h4 className="text-[20px] lg:text-[22px] font-bold text-[#FEFEFE] font-georgia">
              Opening Hours
            </h4>
            <ul className="pl-[5px] w-full text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal">
              <li className="mt-[15px] font-georgia">
                Mon - Fri : 09:00am - 09:00pm
              </li>
              <li className="mt-[15px] font-georgia">
                Saturday: 09:00am - 08:00pm
              </li>
              <li className="mt-[15px] font-georgia">
                Sunday: 12:00pm - 08:00pm
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="contact w-full  lg:w-auto ">
            <h4 className="text-[20px] lg:text-[22px] font-bold text-[#FEFEFE] font-georgia">
              Contact Us
            </h4>
            <div className="mt-[15px] text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal">
              <p className="font-georgia">
                Hiltop Close, G.R.A, <br /> Port Harcourt.
              </p>
            </div>
            <div className="mt-[15px] text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal">
              <p className="font-georgia">+234 901 234 5678</p>
            </div>
            <div className="mt-[15px] text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal">
              <p className="font-georgia">marviefoods@marich.com</p>
            </div>
          </div>
        </div>

      </section>
      <div className="bg-[#331C00] w-full text-center text-white  border-t-[0.005px] border-white py-[10px]">
        Copyright @2024
      </div>
    </>
  );
};

export default Footer;
