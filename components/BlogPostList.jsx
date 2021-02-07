import Link from "next/link";
import sanityClient from "../core/client.js";

const BlogPostList = ({ posts }) => {
  return (
    <div className="BlogPostList">
      <h2>Blog posts!</h2>
      <div>
        {posts &&
          posts.map((post, index) => (
            <Link
              href={`/blogpost/${post.slug.current}`}
              key={post.slug.current}
            >
              <a>
                <span key={index}>
                  <img
                    src={post.mainImage.asset.url}
                    alt="the main image of the post"
                  />
                </span>
                <span>
                  <h2>{post.title}</h2>
                </span>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BlogPostList;
