import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-2xl text-gray-600">
          This page could not be found.
        </p>
        <p className="mt-4 text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-block rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};
