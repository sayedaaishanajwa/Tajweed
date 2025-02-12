// import React from 'react'
// import Image from 'next/image'
// import { FaWhatsapp } from "react-icons/fa6";


// function page() {
//   return (
//   <div className='bg-slate-300'>
     
//     <div className='sm:max-w-[100%] mx-auto 
//     px-20 mr-6 py-6 font-extrabold te bg-blue-950 text-white'>
//      <h1>PROVIDES COMPELET QURAN</h1>
//      <h1>ONLINE CLASSES</h1>
//      </div>

//     <div className='md:flex sm:max-w-[100%]  
//     mx-auto px-12 py-8 mr-6 flex justify-end text-white'>
//       <Image src='/prox.jpeg'
//       alt='prox.jpeg'
//       height={300}
//       width={500}/>
//       </div>
      

//        <div className='justify-start absolute top-1/3 left-7'>
//       <div className=' justify-content max-w-screen-2xl mx-auto px-3 py-0 mr-6 
//       font-mono text-4xl text-black sm:max-w-[100%]'>
//       <p>MALE TEACHER</p>
//       <p className='text-blue-950 sm:max-w-[100%] c'><i>(HAFIZ ABDUL QADEER)</i></p>
//       <p className='space-x-6 sm:max-w-[100%]'>NAZRA QURAN & HIFZ UL QURAN</p>
//       <p>NAMAZ (SALAH)</p>
//       <p>DUA'S</p>
//       <p>TAJWEED COURSES</p>
//   </div>
// </div>
  
//        <div className='flex max-w-screen-2xl mx-auto px-14 py-4 font-extrabold
//    text-3xl sm:max-w-[100%]
//        mr-6 text-white bg-blue-950'>
//             <FaWhatsapp />
//       <p>Contact:- <span className='text-decortion underline'>0312 - 3525 - 471</span>
//         </p>
//        </div>

//     </div>
     

//   )
// }

// export default page

import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

function Page() {
  return (
    <div className="bg-slate-300">
      {/* Header Section */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-6 bg-blue-950 text-white text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
          PROVIDES COMPLETE QURAN
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
          ONLINE CLASSES
        </h1>
      </div>

      {/* Image and Teacher Details */}
      <div className="max-w-screen-2xl mx-auto px-4 py-8 flex flex-col-reverse md:flex-row items-center md:justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-2 md:space-y-4">
          <p className="text-2xl sm:text-3xl font-extrabold text-black">
            MALE TEACHER
          </p>
          <p className="text-blue-950 text-xl font-extrabold">
            <i>(HAFIZ ABDUL QADEER)</i>
          </p>
          <p className="text-lg">NAZRA QURAN, HIFZ UL QURAN</p>
          <p className="text-lg">NAMAZ (SALAH), DUA'S</p>
          <p className="text-lg">TAJWEED COURSES</p>

          {/* Contact Section */}
          <div className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-lg mt-4 justify-center md:justify-start">
            <FaWhatsapp size={24} />
            <p className="text-lg">Contact: 0312-3525-471</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/prox.jpeg"
            alt="Quran Teacher"
            height={300}
            width={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;