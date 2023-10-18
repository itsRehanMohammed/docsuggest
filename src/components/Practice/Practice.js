import React from "react";
import Signup from "../Login and SignUp/Signup";
import PracticeForm from "./PracticeForm";
const Practice = () => {
  return (
    <>
      <section className="text-gray-600 body-font px-24 bg-gradient-to-b from-white to-blue-100">
        <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col justify-center items-start text-center">
          <div className="lg:flex-grow pt-24 md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let's get started</h1>
            <p className="mb-8 leading-relaxed">Doc Suggest is the best way to reach the right patients for your practice. It's easy to join and there are no upfront fees or subscription costs.</p>
          </div>
          <PracticeForm />
        </div>
      </section>
    </>
  );
};

export default Practice;
