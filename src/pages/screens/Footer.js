// components/Footer.js
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="fixed bottom-0 left-0 w-full py-4 text-center text-[13px] text-white secular-one-regular">
      <div className="mb-2">
        🌍 Weather App - All Rights Reserved | &copy; {currentYear}
      </div>
      <a href="" className="text-xl sacramento-regular">
        Biki Mandal
      </a>
    </div>
  );
}
