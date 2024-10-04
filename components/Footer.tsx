import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";

const companyLinks=[
    {title: "About Our Agency", index: 1},
    {title: "Disclaimer", index: 2},
    {title: "Our Testimonials", index:3},
];

const policyLinks=[
    {title: "Terms & Conditions", index: 1},
    {title: "Privacy Policy", index: 2},
    {title: "Cancellation Policy", index: 3},
    {title: "Payment Security", index: 4},
];

const Footer = () => {
  return (
    <footer className="overflow-hidden">
    <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8 sm:border-t-2 border-[#ff3131]">
        <div className="md:flex md:justify-around">
          <div className="sm:grid sm:gap-4 sm:grid-cols-4 hidden">
                <div className="mb-6 md:mb-0 flex items-center flex-col gap-6 ">
                    <Link href="/" className='hidden md:block'>
                        <div>
                            <Image src={logo} alt="logo" height={30} width={150} className='align-center justify-center'/>
                        </div>
                    </Link>
                    <div className="mt-4 sm:justify-center sm:mt-0 hidden sm:flex">
                        <FaFacebook className='text-gray-900 hover:text-[#ff3131] w-6 h-6'/>
                        <FaInstagram className='text-gray-900 hover:text-[#ff3131] ms-5 w-6 h-6'/>
                        <FaTwitter className='text-gray-900 hover:text-[#ff3131] ms-5 w-6 h-6'/>
                    </div>            
                </div>
                <div>
                  <h2 className="mb-2 md:mb-6 text-base font-bold font-poppins text-black uppercase text-center">Policies</h2>
                  <ul className="text-gray-900 font-medium font-poppins text-center">
                    {policyLinks.map((pols) => (
                            <li key={pols.index} className='mb-2 md:mb-4  hover:text-[#ff3131]'>
                                <Link href="/">{pols.title}</Link>
                            </li>
                        ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-2 md:mb-6 text-base font-bold font-poppins text-black uppercase text-center">Company</h2>
                  <ul className="text-gray-900 font-medium font-poppins text-center">
                        {companyLinks.map((comp) => (
                            <li key={comp.index} className='mb-2 md:mb-4 hover:text-[#ff3131]'>
                                <Link href="/">{comp.title}</Link>
                            </li>
                        ))}
                </ul>
              </div>
              <div>
                  <h2 className="mb-2 md:mb-6 text-base font-bold font-poppins text-black uppercase text-center">Get In Touch</h2>
                  <ul className="text-gray-900 font-medium font-poppins text-center">
                            <li className='mb-2 md:mb-4'>WhatsApp : <span className='font-bold hover:text-[#ff3131]'>9971707348</span></li>
                            <li className='mb-2 md:mb-4'>Email : <span className='font-bold hover:text-[#ff3131]'>travelguide538@gmail.com</span></li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-[#ff3131] sm:mx-auto lg:my-8" />
        <div className='block sm:hidden'>
            <h2 className="mb-2 md:mb-6 text-base font-bold font-poppins text-black uppercase text-center">Get In Touch</h2>
            <ul className="text-gray-900 font-medium font-poppins text-center">
                <li className='mb-2 md:mb-4'>WhatsApp : <span className='font-bold hover:text-[#ff3131]'>9971707348</span></li>
                <li className='mb-2 md:mb-4'>Email : <span className='font-bold hover:text-[#ff3131]'>travelguide538@gmail.com</span></li>
            </ul>
        </div>
        <div className="flex items-center justify-center">
            <span className="text-base text-gray-900 text-center hover:text-[#ff3131]">© 2024 <Link href="/" className="hover:underline">Travel Guide™</Link>. All Rights Reserved.</span>
        </div>
      
        <div className="mt-4 justify-center flex sm:hidden">
            <FaFacebook className='text-gray-900 hover:text-[#ff3131] ms-5 w-6 h-6'/>
            <FaInstagram className='text-gray-900 hover:text-[#ff3131] ms-5 w-6 h-6'/>
            <FaTwitter className='text-gray-900 hover:text-[#ff3131] ms-5 w-6 h-6'/>
        </div>  
    </div>
</footer>
)
}

export default Footer