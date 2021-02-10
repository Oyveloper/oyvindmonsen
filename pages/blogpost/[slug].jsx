import serializers from "../../core/serializers";
import sanityClient from "../../core/client.js";
import urlFor from "../../core/imageBuilder";
import BlockContent from "@sanity/block-content-to-react";
import GeneralPage from "../../components/GeneralPage";
import AuthorInformation from "../../components/AuthorInformation";

const BlogPost = ({ post }) => {
  const content =
    post === null ? (
      <h2>404 - not found</h2>
    ) : (
      <div>
        <header className="mb-10">
          <img
            className="w-full object-cover h-80"
            src={urlFor(post.mainImage).url()}
            alt="Main image of post"
          />
        </header>
        <div>
          <article className="md:px-20 lg:px-52 px-5">
            <AuthorInformation name={post.name} />
            <h1 className="font-serif text-5xl lg:text-6xl mb-10 text-gray-700">
              {post.title}
            </h1>
            <BlockContent blocks={post.body} serializers={serializers} />
          </article>
        </div>
      </div>
    );
  return <GeneralPage pageLocation="blog">{content}</GeneralPage>;
};

export async function getServerSideProps(context) {
  const { slug = "" } = context.query;

  const post = await sanityClient.fetch(
    `*[slug.current == "${slug}"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
        }[0]`
  );

  return {
    props: {
      post: post,
    },
  };
}

export default BlogPost;
