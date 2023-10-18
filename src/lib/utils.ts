import clsx, { ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn (...inputs: ClassValue[])  {
  return twMerge(clsx(inputs));
};

 
