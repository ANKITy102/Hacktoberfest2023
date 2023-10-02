import React from "react";

const Button = ({ size = "default", children, type = "primary" }) => {
  const primaryButton = {
    small: (
      <button
        className={`px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg`}
      >
        {children}
      </button>
    ),
    default: (
      <button
        className={`px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg`}
      >
        {children}
      </button>
    ),
    medium: (
      <button className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">
        {children}
      </button>
    ),
    large: (
      <button className="px-6 py-3.5 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
        {children}
      </button>
    ),
    xl: (
      <button className="px-7 py-4 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">
        {children}
      </button>
    ),
  };
  const secondaryButton = {
    small: (
      <button className="px-3 py-1.5 text-sm text-gray-700 duration-100 border rounded-lg hover:border-indigo-600 active:shadow-lg">
        {children}
      </button>
    ),
    default: (
      <button className="px-4 py-2 text-gray-700 border rounded-lg duration-100 hover:border-indigo-600 active:shadow-lg">
        {children}
      </button>
    ),
    medium: (
      <button className="px-5 py-3 text-gray-700 duration-100 border rounded-lg hover:border-indigo-600 active:shadow-lg">
        {children}
      </button>
    ),
    large: (
      <button className="px-6 py-3.5 text-gray-700 border rounded-lg duration-100 hover:border-indigo-600 active:shadow-lg">
        {children}
      </button>
    ),
    xl: (
      <button className="px-7 py-4 text-gray-700 duration-100 border rounded-lg hover:border-indigo-600 active:shadow-lg">
        {children}
      </button>
    ),
  };
  return <>
  {type=="primary" &&  primaryButton[size]}
  {type=="secondary" &&  secondaryButton[size]}
  </>;
};

export default Button;
