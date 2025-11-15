import React from "react";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => (
  <textarea
    ref={ref}
    className={
      "w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-red-500 focus:border-red-500 " +
      className
    }
    {...props}
  />
));

Textarea.displayName = "Textarea";
