import React from "react";

const TopSerach = () => {
  const topSearches = [
    { id: 1, searchName: "Primary Care" },
    { id: 2, searchName: "Dentist" },
    { id: 3, searchName: "OB-GYN" },
    { id: 4, searchName: "Dermatologist" },
    { id: 5, searchName: "Psychiatrist" },
    { id: 6, searchName: "Eye Doctor" },
  ];
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-12 pt-4 pb-24 mx-auto">
          <div className="flex flex-col w-full mb-14">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Top-searched specialties</h1>
            <p className="lg:w-2/3 ml-1 leading-relaxed text-base">Based on last year searches</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            {topSearches.map((item) => {
              return (
                <div className="p-4 md:w-1/6 sm:w-1/2 w-full" key={item.id}>
                  <div className="border-2 border-gray-200 px-4 py-6 rounded-lg cursor-pointer hover:bg-gray-100">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <p className="leading-relaxed">{item.searchName}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSerach;
