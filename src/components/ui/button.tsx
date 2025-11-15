import React from "react";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", children, ...props }, ref) => (
  <button
    ref={ref}
    className={
      "px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition " +
      className
    }
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";
