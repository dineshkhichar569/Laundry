import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="text-9xl mb-4">🧺</div>
      <h1 className="text-6xl font-bold text-brand mb-3">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="px-6 py-3 bg-brand text-white rounded-lg font-semibold">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;