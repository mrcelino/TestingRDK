"use client";
import React, { useState } from "react";
import { FaqData } from "./Data";

export function FAQHolder(item: FaqData) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="accordion border-solid border-black border-[3px] md:p-2 rounded-xl mb-4 lg:p-4 p-2 w-10/12"
      id="basic-heading-two-with-icon"
    >
      <button
        className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-green-900 w-full transition duration-500"
        onClick={toggleAccordion}
        aria-controls="basic-collapse-two-with-icon"
      >
        <h5
          className={`lg:text-xl transition-all duration-500 transform px-6 md:text-lg sm:text-base text-sm ${
            isOpen ? "font-bold" : "italic"
          }`}
        >
          {item.question}
        </h5>
        <svg
          className={`w-6 h-6 text-gray-900 transition-transform duration-500 transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        id="basic-collapse-two-with-icon"
        className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        aria-labelledby="basic-heading-two"
      >
        <p className="lg:text-xl text-gray-900 font-normal leading-6 py-2 px-6 md:text-lg sm:text-base text-sm">
          {item.answer}
        </p>
      </div>
    </div>
  );
}
