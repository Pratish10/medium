import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Welcome to My Blog Platform
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Discover insightful stories, ideas, and expertise from writers around
          the world.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
          <Link
            to="/blogs"
            className="rounded-full border border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-100 transition"
          >
            Browse Blogs
          </Link>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-8">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
