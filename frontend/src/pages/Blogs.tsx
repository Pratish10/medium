import { AppBar } from "@/Components/AppBar";
import { BlogCard } from "@/components/BlogCard";
import { Loader } from "@/Components/Loader";
import { useBlogs } from "@/hooks";

const sampleBlogs = [
  {
    authorName: "John Doe",
    title: "The Future of Web Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    publishedDate: "Mar 2, 2025",
    id: "1",
  },
  {
    authorName: "Jane Smith",
    title: "Mastering React Hooks",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    publishedDate: "Feb 28, 2025",
    id: "2",
  },
  {
    authorName: "Alex Johnson",
    title: "The Rise of AI in Software Development",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    publishedDate: "Feb 25, 2025",
    id: "3",
  },
];

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
