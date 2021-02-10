import GeneralPage from "../components/GeneralPage";
import sanityClient from "../core/client";
import urlFor from "../core/imageBuilder";

export default function Home({ author }) {
  return (
    <GeneralPage pageLocation="home">
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
    </GeneralPage>
  );
}

export async function getStaticProps() {
  const author = await sanityClient.fetch(
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
  );

  return {
    props: {
      author: author,
    },
  };
}
