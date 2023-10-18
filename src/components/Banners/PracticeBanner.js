import React from "react";
import { Link } from "react-router-dom";

const PracticeBanner = () => {
  return (
    <>
      <section className="text-gray-600 body-font px-10">
        <div className="flex flex-col w-full pt-10">
          <h1 className="sm:text-4xl text-3xl font-medium mx-auto title-font mb-4 text-gray-900">List your practice</h1>
        </div>
        <div className="container mx-auto flex px-5 pb-24 pt-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Are you a provider interested in reaching new patients?</h1>
            <p className=" leading-relaxed"> • Reach patients in your area looking for a new provider</p>
            <p className="leading-relaxed"> • Fill last-minute openings in your schedule</p>
            <p className="mb-8 leading-relaxed"> • Strengthen your online reputation with verified reviews</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                <Link to={"/listpractice"}>List your practice on DocSuggest</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeBanner;
