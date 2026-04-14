import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-4xl w-full text-center bg-base-100 p-10 rounded-2xl shadow-sm border">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-base-200 rounded-full">
            <AlertTriangle className="w-10 h-10 text-heading" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-5xl font-bold mb-2 text-brand">404</h1>

        <h2 className="text-xl font-semibold mb-2">Page not found</h2>

        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/" className="btn bg-brand text-white gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
