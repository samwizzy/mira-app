import React from "react";

function Footer() {
  return (
    <footer className="text-center">
      <hr className="border-0 border-t-2 border-blue-600 border-dashed bg-blue-800" />

      <div className="bg-blue-800 text-gray-300 py-4 px-4">
        <p className="text-sm">Mira Frontend Assessment Project.</p>
        <p className="text-sm">Designed by Samuel Okeke.</p>
      </div>
      <div className="bg-gray-200 text-gray-700 py-4 px-4">
        <p className="text-sm">
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
