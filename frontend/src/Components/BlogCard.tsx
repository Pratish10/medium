import { Link } from "react-router-dom";

type BlogCardProps = {
  title: string;
  content: string;
  author: {
    name: string;
  };
  id: string;
};

export const BlogCard = ({ author, content, title, id }: BlogCardProps) => {
  return (
    <article className="mb-8 border-b border-gray-200 pb-8">
      <div className="mb-2 flex items-center text-sm">
        <span className="font-medium text-gray-700">{author.name}</span>
        <span className="mx-1 text-gray-500">·</span>
      </div>
      <Link to={`/blog/${id}`} className="group">
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 group-hover:underline">
          {title}
        </h2>
        <p className="mb-3 text-base text-gray-700">
          {content.slice(0, 160)}...
        </p>
      </Link>
      <div className="flex items-center text-sm">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
          {Math.ceil(content.length / 1000)} min read
        </span>
      </div>
    </article>
  );
};
