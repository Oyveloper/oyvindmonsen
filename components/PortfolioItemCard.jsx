import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import urlFor from "../core/imageBuilder";

const PortfolioItemCard = ({ portfolioItem }) => {
  console.table(portfolioItem);
  return (
    <a href={`project/${portfolioItem.slug.current}`}>
      <div className='group h-80 w-full overflow-hidden rounded-lg shadow-md block relative'>
        <img
          className='object-cover h-full w-full absolute'
          src={urlFor(portfolioItem.image).url()}
          alt=''
        />

        <div className='block max-h-full portfolio-info-section bg-white w-full px-8 py-5 absolute bottom-0'>
          <h3 className='font-bold text-lg'>{portfolioItem.name}</h3>
        </div>
      </div>
    </a>
  );
};
<h2 className='text-lg font-serif'>Øyvind Monsen</h2>;

export default PortfolioItemCard;
