import { BlogCard } from "@/Components/BlogCard";
import { Loader } from "@/Components/Loader";
import { useBlogs } from "@/hooks";

export const Blogs = () => {
  const { blogs, isLoading, error } = useBlogs();

  const data = blogs ?? [];

  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Latest Blog Posts
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : error ? (
          <>{error}</>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {data.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
