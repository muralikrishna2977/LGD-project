import React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={
      "w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-red-500 focus:border-red-500 " +
      className
    }
    {...props}
  />
));

Input.displayName = "Input";
