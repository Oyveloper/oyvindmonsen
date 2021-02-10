import GeneralPage from "../components/GeneralPage";
import PortfolioSection from "../components/PortfolioSection";
import sanityClient from "../core/client";
import urlFor from "../core/imageBuilder";
import Head from "next/head";

export default function Home({ author, portfolioItems }) {
  return (
    <GeneralPage pageLocation="home">
      <Head>
        <title>Øyvind Monsen</title>
      </Head>
      <header className="w-full">
        <div className="bg-gray-700 w-full h-96 grid sm:grid-cols-2 grid-cols-2 md:grid-cols-4 lg-grid-cols-4 grid-rows-none">
          <div
            id="info-section"
            className="flex w-full justify-center p-12 flex-col col-start-1 md:col-start-2 lg:col-start-2"
          >
            <h1 className="text-5xl text-white font-serif italic mb-3">
              {author.name}
            </h1>
            <h3 className="text-lg text-white">
              {author.bio[0].children[0].text}
            </h3>
          </div>

          <div
            id="cutout-section"
            className="sm:col-start-3 col-start-3 md:col-start-3 lg:col-start-3 h-full relative col-span-2"
          >
            <img
              src={urlFor(author.image).url()}
              alt="An image of me"
              className=" h-full bottom-0 absolute object-cover"
            />
          </div>
        </div>
      </header>
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
          description,
          url,
          technologies,

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
