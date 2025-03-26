import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Twitch, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
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
              <span className="text-xl font-bold text-white">GameHub</span>
            </Link>
            <p className="text-sm">
              Your ultimate destination for gaming news, reviews, and community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitch"
              >
                <Twitch size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="hover:text-white transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/categories/action"
                  className="hover:text-white transition-colors"
                >
                  Action
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/adventure"
                  className="hover:text-white transition-colors"
                >
                  Adventure
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/rpg"
                  className="hover:text-white transition-colors"
                >
                  RPG
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/strategy"
                  className="hover:text-white transition-colors"
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/sports"
                  className="hover:text-white transition-colors"
                >
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest gaming news and updates.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-3 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} GameHub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="text-sm hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
