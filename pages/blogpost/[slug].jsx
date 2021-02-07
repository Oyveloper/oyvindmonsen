import sanityClient from "../../core/client.js";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        children={value}
      />
    );
  },
};

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
        <ReactMarkdown renderers={renderers} plugins={[gfm]}>
          {post.body}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug = "" } = context.query;
  console.log("Hello world");

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
