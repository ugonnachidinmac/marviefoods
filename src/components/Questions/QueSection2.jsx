import React, { useState } from 'react';
import data from '../../../data/db.json'; // Importing directly from db.json
import arrowDown from '../../assets/arrowDown.svg';
import arrowUp from '../../assets/arrowUp.svg';

const QueSection2 = () => {
  // Initialize openFaq with the id of the first FAQ
  const [openFaq, setOpenFaq] = useState(data.FAQandA.length > 0 ? data.FAQandA[0].id : null);

  // Function to toggle specific answer visibility
  const toggleAnswer = (id) => {
    setOpenFaq(openFaq === id ? null : id); // Toggle between opening and closing the answer
  };

  return (
    <>
      <section className='ml-[24px] mr-[24px] mt-[50px] lg:mr-[80px] mb-[75px] lg:ml-[80px]'>
        {data.FAQandA.map((faq, index) => (
          <div key={faq.id} className='bg-[#FFE8CC] pt-[25px] pr-[25px] pb-[5px] pl-[25px] rounded-[10px] mb-[20px]'>
            <div
              className='question flex justify-between items-center cursor-pointer pb-[20px]'
              onClick={() => toggleAnswer(faq.id)}
            >
              <p className='que text-[26px] '>{faq.que}</p>
              <div>
                <img className='arrow' src={openFaq === faq.id ? arrowDown : arrowUp} alt="Toggle arrow" />
              </div>
            </div>
            {openFaq === faq.id && (
              <div className='answer mt-[10px] border-t-[#5C5955] border-[1px] pt-[20px]'>
                <p className='ans'>{faq.ans}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default QueSection2;
