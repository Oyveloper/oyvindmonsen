import React from "react";
import Navbar from "./Navbar";

const GeneralPage = ({ children, pageLocation }) => {
  return (
    <div className="min-h-screen">
      <Navbar location={pageLocation} />
      <div className="bg-gray-100">{children}</div>
    </div>
  );
};

export default GeneralPage;
