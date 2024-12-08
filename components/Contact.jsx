import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Existing Section */}
      <div className="h-[286px] w-full bg-[#F6F5FF]">
        <div className="inline-block ml-[20px] sm:ml-[50px] lg:ml-[200px] mt-[97px]">
          <h1 className="text-2xl font-bold text-[#101750]">Contact Us</h1>
          <div className="inline-block text-gray-500">
            Home.Pages.<span className="text-[#FB2E86]">Contact</span>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="h-[270px] w-full mt-8">
        <div className="flex flex-col sm:flex-row sm:ml-[50px] lg:ml-[200px] gap-6">
          {/* First Column */}
          <div className="flex-1">
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#151875]">Information About Us</h2>
            <p className="mt-2 text-[#8A8FB9] text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Vivamus
              lacinia odio vitae <br /> vestibulum vestibulum.
            </p>
            <div className="flex mt-4 space-x-4">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex-1">
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#151875]">Contactway</h2>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-row mt-4 space-x-12 sm:space-x-8">
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] bg-[#5726DF] rounded-full"></div>
                  <span className="ml-4 text-[#8A8FB9]">Tel: 877-67-88-99</span>
                </div>
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] bg-purple-500 rounded-full"></div>
                  <span className="ml-4 text-[#8A8FB9]">Support Forum</span>
                </div>
              </div>

              <div className="flex flex-row sm:space-x-28 space-x-12">
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] bg-[#FFB265] rounded-full"></div>
                  <span className="ml-4 text-[#8A8FB9]">John Doe</span>
                </div>
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] bg-[#1BE982] rounded-full"></div>
                  <span className="ml-4 text-[#8A8FB9]">123 Main Street</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section 2 */}
      <div className="flex flex-col sm:flex-row mx-[20px] sm:mx-[50px] lg:mx-[200px] mt-10 mb-20 space-y-6 sm:space-y-0 sm:space-x-9">
        {/* First Column */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#151875]">Get in touch</h2>
          <p className="mt-2 text-[#8A8FB9] text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-col text-[#8A8FB9]">
            <form className="mt-4 space-y-4 text-[#8A8FB9]">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <textarea
                  className="w-full sm:w-1/2 h-10 px-4 border border-gray-300 rounded"
                  placeholder="Name"
                ></textarea>
                <textarea
                  className="w-full sm:w-1/2 h-10 px-4 border border-gray-300 rounded"
                  placeholder="Email"
                ></textarea>
              </div>
              <textarea
                className="w-full h-10 px-4 border border-gray-300 rounded"
                placeholder="Subject"
              ></textarea>
              <textarea
                className="w-full h-20 px-4 border border-gray-300 rounded"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 text-white bg-[#FB2E86] rounded hover:bg-blue-600"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>

        {/* Second Column (Image Placeholder) */}
        <div className="flex-1 w-full sm:w-[400px] h-[400px] bg-gray-200">
          <img className="w-full h-full object-cover" src="/Group124.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;