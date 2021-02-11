import React from "react";

import urlFor from "../core/imageBuilder";
import LinkSection from "./LinkSection";

export default function HeroSection({ author }) {
  return (
    <header className="w-full">
      <div className="bg-gray-700 w-full h-96 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-none">
        <div
          id="info-section"
          className="flex w-full justify-center p-12 flex-col col-start-1 md:col-start-1 lg:col-start-2"
        >
          <h1 className="text-5xl text-white font-serif italic mb-3">
            {author.name}
          </h1>
          <h3 className="text-lg text-white">
            {author.bio[0].children[0].text}
          </h3>

          <LinkSection />
        </div>

        <div
          id="cutout-section"
          className="sm:col-start-2 col-start-3 md:col-start-2 lg:col-start-3 h-full relative col-span-2"
        >
          <img
            src={urlFor(author.image).url()}
            alt="An image of me"
            className=" h-full bottom-0 absolute object-cover"
          />
        </div>
      </div>
    </header>
  );
}
