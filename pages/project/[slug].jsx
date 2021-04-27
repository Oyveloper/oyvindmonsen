import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../../core/imageBuilder";
import sanityClient from "../../core/client.js";
import serializers from "../../core/serializers";
import GeneralPage from "../../components/GeneralPage";
import Head from "next/head";
import TechHighlight from "../../components/TechHighlight";

const ProjectPage = ({ portfolioItem }) => {
  const content =
    portfolioItem === null ? (
      <h2>404 - not found</h2>
    ) : (
      <div>
        <Head>
          <title>{portfolioItem.name}</title>
        </Head>
        <header className='mb-10'>
          <img
            className='w-full object-contain  h-80'
            src={urlFor(portfolioItem.image).url()}
            alt='Main image of project'
          />
        </header>
        <div>
          <article className='md:px-20 lg:px-52 px-5'>
            <h1 className='font-serif text-5xl lg:text-6xl mb-10 text-gray-700'>
              {portfolioItem.name}
            </h1>
            <BlockContent
              blocks={portfolioItem.description}
              serializers={serializers}
            />

            <TechHighlight technologies={portfolioItem.technologies} />
          </article>
        </div>
      </div>
    );
  return <GeneralPage pageLocation='blog'>{content}</GeneralPage>;
};

export default ProjectPage;

export async function getStaticProps(context) {
  const { slug = "" } = context.params;

  const portfolioItem = await sanityClient.fetch(
    `*[slug.current == "${slug}"]{
          name,
          image{
              asset->{
                  _id,
                  url
              }
          },
          description,
          url,
          technologies,
          slug,
   }[0]`
  );

  return {
    props: {
      portfolioItem: portfolioItem,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const portfolioItems = await sanityClient.fetch(
    `*[_type == "portfolioItem"]{
      slug,
    }[0...20]`
  );
  const paths = portfolioItems.map((item) => {
    return { params: { slug: item.slug.current } };
  });

  return {
    fallback: "blocking",
    paths: paths,
  };
}
