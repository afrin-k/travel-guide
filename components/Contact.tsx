"use client";
import { useState } from "react";
import { FaPhone, FaHome } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import Link from "next/link";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      subject,
      message,
    });

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="bg-gray-900 max-h-screen overflow-x-hidden">
      <h1 className="font-poppins text-5xl font-bold w-[330px] md:w-[600px] text-white py-10 text-center mx-auto">Contact Us</h1>
      
      <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2 justify-center items-center">
        <div className="sm:mx-auto mx-6 mb-6 py-4 px-4 md:px-10 text-left text-white font-poppins space-y-8">
        
        <div className="flex items-center space-x-4 ">
          <FaPhone className="text-3xl" />
          <p>Available on WhatsApp 24/7 : <br className="block sm:hidden"/> <Link href="tel:+919971707348" className="hover:underline">+91 9971707348</Link></p>
        </div>

        
        <div className="flex items-center space-x-4">
          <IoMdMailOpen className="text-3xl" />
          <p>Email: <br className="block sm:hidden"/><Link href="mailto:travelguide538@gmail.com" className="hover:underline">travelguide538@gmail.com</Link></p>
        </div>


        <div className="flex items-center space-x-4">
          <FaHome className="text-3xl" />
          <p>Thana Road, Madhupur,<br className="block sm:hidden"/> Opposite Jio Care <br />
            Near Bari Masjid, Deoghar,<br className="block sm:hidden"/> Jharkhand-815353
          </p>
        </div>
      </div>
      <div>
      <form className="mb-6 w-full sm:w-[500px] px-4 justify-center items-center" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-poppins text-base font-medium text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-poppins rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 font-poppins text-base font-medium text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-50 border border-gray-300 font-poppins text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Let us know how we can help you..."
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 font-poppins text-base font-medium text-white">
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block p-2.5 w-full font-poppins text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white font-poppins bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-1/2 focus:outline-none">
          Send message
        </button>
      </form>
      </div>
    </div>
    </section>
  );
};

export default Contact;
