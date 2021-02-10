import Link from "next/link";

const BlogPostList = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts &&
        posts.map((post, index) => (
          <div
            className="group shadow-lg rounded-md overflow-hidden"
            key={`post-card-${post.slug.current}`}
          >
            <Link
              href={`/blogpost/${post.slug.current}`}
              key={post.slug.current}
            >
              <a>
                <span
                  className="bg-white block h-64 relative rounded shadow "
                  key={index}
                >
                  <img
                    className="w-full h-full rounded object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt="the main image of the post"
                  />
                  <span className="relative h-full flex justify-end items-end ">
                    <h2 className="w-full text-gray-800 text-lg font-bold px-3 py-4 bg-white">
                      {post.title}
                    </h2>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogPostList;
