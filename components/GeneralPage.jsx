import React from "react";
import Navbar from "./Navbar";

const GeneralPage = ({ children, pageLocation }) => {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Navbar location={pageLocation} />
      <div className="">{children}</div>
    </div>
  );
};

export default GeneralPage;
