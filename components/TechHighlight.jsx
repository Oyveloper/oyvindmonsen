import React from "react";

const TechHighlight = ({ technologies }) => {
  return (
    <div className='shadow-md bg-white px-10 py-5'>
      <h2>Technologies:</h2>
      <ul className='list-disc ml-5'>
        {technologies.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechHighlight;
