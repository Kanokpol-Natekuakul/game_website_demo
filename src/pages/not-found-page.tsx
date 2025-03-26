import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="text-indigo-600 dark:text-indigo-400 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-24 h-24 mx-auto opacity-75"
          >
            <path
              d="M85,40c0-11-15-20-35-20S15,29,15,40v20c0,11,15,20,35,20s35-9,35-20V40z"
              fill="currentColor"
            />
            <circle cx="30" cy="40" r="8" className="fill-white dark:fill-gray-800" />
            <circle cx="70" cy="40" r="8" className="fill-white dark:fill-gray-800" />
            <rect x="20" y="60" width="20" height="5" className="fill-white dark:fill-gray-800" />
            <rect x="27.5" y="52.5" width="5" height="20" className="fill-white dark:fill-gray-800" />
            <g className="fill-white dark:fill-gray-800">
              <circle cx="75" cy="60" r="4" />
              <circle cx="65" cy="60" r="4" />
              <circle cx="70" cy="55" r="4" />
              <circle cx="70" cy="65" r="4" />
            </g>
          </svg>
        </div>

        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for seems to have vanished into the digital void.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
          >
            Go Back
          </Button>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
