import React from "react";

const AuthorInformation = ({ name }) => {
  return (
    <div>
      <p className="font-serif">Written by {name}</p>
    </div>
  );
};

export default AuthorInformation;
