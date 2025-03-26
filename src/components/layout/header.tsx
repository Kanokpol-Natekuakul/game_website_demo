import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";
import { ButtonLink } from "../ui/button";
import { cn } from "../../lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-indigo-500"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85,40c0-11-15-20-35-20S15,29,15,40v20c0,11,15,20,35,20s35-9,35-20V40z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xl font-bold">GameHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/games"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Games
            </Link>
            <Link
              to="/categories"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="rounded-full p-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="rounded-full p-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <ButtonLink to="/login" variant="primary" size="sm">
              Sign In
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-gray-800",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/games"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Games
          </Link>
          <Link
            to="/categories"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-3">
              <ButtonLink
                to="/login"
                variant="primary"
                size="sm"
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
