import React from "react";
import PortfolioItemCard from "./PortfolioItemCard";

const PortfolioSection = ({ portfolioItems }) => {
  return (
    <section className="px-12 mt-5">
      <h2 className="w-full text-center text-2xl font-serif mb-10">
        —— Projects ——
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {portfolioItems.map((item, index) => (
          <PortfolioItemCard portfolioItem={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
