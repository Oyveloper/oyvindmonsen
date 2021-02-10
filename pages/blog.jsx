import BlogPostList from "../components/BlogPostList";
import GeneralPage from "../components/GeneralPage";
import sanityClient from "../core/client.js";

const Blog = ({ posts }) => (
  <GeneralPage pageLocation="blog">
    <h1 className="text-5xl flex justify-center py-20 font-serif">
      Blog about tech
    </h1>
    <div className="px-12">
      <BlogPostList posts={posts} />
    </div>
  </GeneralPage>
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
