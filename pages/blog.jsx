import BlogPostList from "../components/BlogPostList";
import Navbar from "../components/Navbar";
import sanityClient from "../core/client.js";

const Blog = ({ posts }) => (
  <div>
    <Navbar />
    <h1>This is my blog</h1>
    <BlogPostList posts={posts} />
  </div>
);

export async function getServerSideProps(context) {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{
              title,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  }
              }
          }`
  );

  return {
    props: {
      posts: posts,
    },
  };
}

export default Blog;
