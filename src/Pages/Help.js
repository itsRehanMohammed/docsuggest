import React from "react";
import FAQ from "../components/FAQ/FAQ";

const Help = () => {
  return (
    <>
      <section className="text-gray-600 body-font px-10 bg-gradient-to-b from-white to-blue-100">
        <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before Get the info you’re looking for right now
            </h1>
            <p className="mb-8 leading-relaxed">
              Get answers to common questions and access service support
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://reay.netlify.app/images/contact.png"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font px-10 ">
        <div className="container px-4 pt-14 pb-24 mx-auto">
          <div className="flex flex-col w-full mb-14">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Get in touch with a member of our friendly Service team
            </h1>
            <p className="lg:w-2/3 ml-1 leading-relaxed text-base">
              BWe’re available 365 days a year! Monday – Friday from 8am-8pm
              EST, and weekends and holidays from 9am-6pm EST.
            </p>
          </div>
          <div className="flex flex-wrap mt-8 -m-4 text-center space-x-4">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Start a chat
              </h2>
              <p className="leading-relaxed text-base">
                We respond right away during normal business hours*
              </p>
              <a className="inline-flex mt-4 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Start Chat
              </a>
            </div>
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Send an email
              </h2>
              <p className="leading-relaxed text-base">
                We’ll get back to you within a day
              </p>
              <a className="inline-flex mt-4 font-semibold text-blue-500 py-2 rounded text-lg">
                help@docsuggest.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default Help;
