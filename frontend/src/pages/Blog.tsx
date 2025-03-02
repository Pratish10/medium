import { Loader } from "@/Components/Loader";
import { useBlog } from "@/hooks";
import { Link, useParams } from "react-router-dom";

interface Blog {
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const { blog, error, isLoading } = useBlog({ id: id ?? "" });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error || !blog) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/blogs"
        className="mb-6 inline-block text-gray-600 hover:text-gray-900"
      >
        ← Back to all posts
      </Link>
      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            {blog.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <p className="font-medium text-gray-900">{blog.author.name}</p>
              </div>
            </div>
          </div>
        </header>
        <p className="prose prose-lg max-w-none">{blog.content}</p>
        <footer className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex items-center">
            <div>
              <h3 className="font-bold text-gray-900">{blog.author.name}</h3>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};
