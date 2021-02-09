import serializers from "../../core/serializers";
import sanityClient from "../../core/client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const BlogPost = ({ post }) => {
  return post === null ? (
    <h2>404 - Could not find the post</h2>
  ) : (
    <div>
      <div>
        <h2>{post.title}</h2>
        <h4>{post.name}</h4>
      </div>

      <img
        src={urlFor(post.mainImage).width(200).url()}
        alt="Main image of post"
      />

      <article>
        <BlockContent blocks={post.body} serializers={serializers} />
      </article>
    </div>
  );
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
