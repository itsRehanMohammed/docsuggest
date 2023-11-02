import React, { useState } from "react";
import data from "../../places.json";
import { Link, useParams } from "react-router-dom";
import DoctorReviews from "./DoctorReviews";
const DoctorDetails = ({ isLoggedIn }) => {
  const { doctorname } = useParams();
  console.log("data", data.data, doctorname);
  return (
    <>
      {data.data.map((item) => {
        return (
          item.name.toLocaleLowerCase() === doctorname.toLocaleLowerCase() && (
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-full mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="https://dummyimage.com/400x400"
                  />
                  <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      DOCTOR NAME
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      Dr. {item.name}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-orange-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-orange-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-orange-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-orange-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-orange-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                      </span>
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                      <div className="ml-auto">
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="leading-relaxed">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                      fam indxgo juiceramps cornhole raw denim forage brooklyn.
                      Everyday carry +1 seitan poutine tumeric. Gastropub blue
                      bottle austin listicle pour-over, neutra jean shorts
                      keytar banjo tattooed umami cardigan.
                    </p>
                    <p className="leading-relaxed my-4 text-gray-900">
                      <span className=" font-bold">NPI Number: </span>{" "}
                      9990921090
                    </p>
                  </div>
                </div>
              </div>
              <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -mx-4 pt-10 pb-24 -mb-10 text-center justify-center bg-gray-100">
                  <div className="sm:w-2/2 mb-10 px-4">
                    <h2 className="title-font text-2xl text-center font-medium text-gray-900 mt-6 mb-3">
                      Awards
                      {/* <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div> */}
                    </h2>
                    <p className="leading-relaxed text-base">Honours of MBBS</p>
                    <p className="leading-relaxed text-base">
                      Doctor of the Year 2017
                    </p>
                  </div>
                  <div className="sm:w-1/2 mb-10 px-4">
                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                      Education
                    </h2>
                    <p className="leading-relaxed text-base px-20">
                      Padua High School
                    </p>
                    <p className="leading-relaxed text-base px-20">
                      IIT Mumbai
                    </p>
                  </div>

                  <div className="sm:w-2/2 mb-10 px-4">
                    <h2 className="title-font text-2xl text-center font-medium text-gray-900 mt-6 mb-3">
                      Certificates
                      {/* <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div> */}
                    </h2>
                    <p className="leading-relaxed text-base">MBBS</p>
                    <p className="leading-relaxed text-base">ILTS</p>
                  </div>
                </div>
                {!isLoggedIn && (
                  <div className="sm:w-2/2 mb-10 px-4">
                    <Link
                      to={"/login"}
                      className="flex mx-auto mt-3 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded max-w-[214px]"
                    >
                      Login To Get Full Details
                    </Link>
                  </div>
                )}
              </div>

              {isLoggedIn && (
                <div className="container px-5 pb-24 mx-auto">
                  <div className="flex flex-wrap -mx-4 -mb-10 text-center bg-gray-100">
                    <div className="sm:w-1/2 mb-10 px-4">
                      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                        Office Location
                      </h2>
                      <p className="leading-relaxed text-base px-20">
                        {" "}
                        Florida City, USA
                      </p>
                      <a
                        href={`https://www.google.com/maps?q=${item.latitude},${item.longitude}`}
                        className="flex mx-auto mt-3 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded max-w-[136px]"
                        target="_blank"
                      >
                        Get Direction
                      </a>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                      <h2 className="title-font text-2xl text-center font-medium text-gray-900 mt-6 mb-3">
                        Contact Details
                        {/* <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div> */}
                      </h2>

                      <p className="leading-relaxed mt-4 text-base">
                        phone no:{" "}
                        <a
                          href={`tel:${item.phone}`}
                          className="inline-flex  font-semibold text-blue-500 rounded"
                        >
                          {item.phone}
                        </a>
                      </p>
                      <p className="leading-relaxed mt-4 text-base">
                        email:{" "}
                        <a
                          href={`mailto:${item.email}`}
                          className="inline-flex  font-semibold text-blue-500  rounded "
                        >
                          {item.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <DoctorReviews doctor={item} isLoggedIn={isLoggedIn} />
            </section>
          )
        );
      })}
    </>
  );
};

export default DoctorDetails;
