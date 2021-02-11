import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import urlFor from "../core/imageBuilder";

const PortfolioItemCard = ({ portfolioItem }) => {
  const title =
    portfolioItem.url == "" ? (
      <h3 className="font-bold text-lg">{portfolioItem.name}</h3>
    ) : (
      <a href={portfolioItem.url} className="underline">
        <h3 className="font-bold text-lg">{portfolioItem.name}</h3>
      </a>
    );
  return (
    <div className="group h-80 w-full overflow-hidden rounded-lg shadow-md block relative">
      <img
        className="object-cover h-full w-full absolute"
        src={urlFor(portfolioItem.image).url()}
        alt=""
      />

      <div className="block max-h-full portfolio-info-section bg-white w-full px-8 py-5 absolute bottom-0">
        {title}
        <div className="transition-max-height duration-500 ease-in-out max-h-0 h-auto overflow-hidden group-hover:max-h-96">
          <BlockContent blocks={portfolioItem.description} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemCard;
