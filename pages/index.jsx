import React from "react";
import GeneralPage from "../components/GeneralPage";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import sanityClient from "../core/client";
import Head from "next/head";

export default function Home({ author, portfolioItems }) {
  return (
    <GeneralPage pageLocation='home'>
      <Head>
        <title>Øyvind Monsen</title>
      </Head>
      <HeroSection author={author} />
      <PortfolioSection portfolioItems={portfolioItems} />
    </GeneralPage>
  );
}

export async function getStaticProps() {
  const [author, portfolioItems] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "author"]{
      name,
      bio,
      image{
        asset->{
          _id,
          url
        }
      }
    }[0]`
    ),
    sanityClient.fetch(
      `*[_type == "portfolioItem"]{
          name,
          image{
              asset->{
                  _id,
                  url
              }
          },
          url,
          slug,

      }`
    ),
  ]);

  return {
    props: {
      author: author,
      portfolioItems: portfolioItems,
    },
  };
}
