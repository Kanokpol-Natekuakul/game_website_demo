import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getGameById } from "../data/games";
import { Button } from "../components/ui/button";
import { Star, ArrowLeft, Share2, Heart, ShoppingCart, Award, Monitor, Calendar, Users } from "lucide-react";
import { cn } from "../lib/utils";
import toast from "react-hot-toast";

export function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = getGameById(id || "");
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Game Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The game you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate("/games")}>
          Browse All Games
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${game.title} added to cart!`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted
        ? `${game.title} removed from wishlist`
        : `${game.title} added to wishlist!`
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const formattedPrice = game.price ? `$${game.price.toFixed(2)}` : "Free";
  const discountedPrice = game.discount && game.price
    ? `$${(game.price - (game.price * game.discount / 100)).toFixed(2)}`
    : null;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Games
          </button>
        </div>

        {/* Game Header */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-indigo-600 text-xs font-semibold text-white">
                  {game.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {game.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={cn(
                          "fill-current",
                          index < Math.floor(game.rating)
                            ? "text-yellow-400"
                            : index < game.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                    <span className="ml-2 text-white">
                      {game.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-gray-300">
                    {game.developer}
                  </span>
                </div>
              </div>
              <div className="flex mt-4 md:mt-0 space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="bg-black/50 border-gray-600 hover:bg-black/70 text-white"
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWishlist}
                  className={cn(
                    "border-gray-600 hover:bg-black/70 text-white",
                    isWishlisted ? "bg-red-600/50" : "bg-black/50"
                  )}
                >
                  <Heart
                    size={16}
                    className={cn("mr-2", isWishlisted && "fill-current")}
                  />
                  Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Game Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                About
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {game.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Developer
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {game.developer}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Publisher
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {game.publisher}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Release Date
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {new Date(game.releaseDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Genre
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {game.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award size={16} className="text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                System Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Minimum</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">OS</p>
                        <p className="text-gray-700 dark:text-gray-300">Windows 10 64-bit</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Processor</p>
                        <p className="text-gray-700 dark:text-gray-300">Intel Core i5-6600K / AMD Ryzen 5 1500X</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Memory</p>
                        <p className="text-gray-700 dark:text-gray-300">8 GB RAM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Graphics</p>
                        <p className="text-gray-700 dark:text-gray-300">NVIDIA GTX 1060 / AMD RX 580</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Storage</p>
                        <p className="text-gray-700 dark:text-gray-300">50 GB available space</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Recommended</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">OS</p>
                        <p className="text-gray-700 dark:text-gray-300">Windows 10/11 64-bit</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Processor</p>
                        <p className="text-gray-700 dark:text-gray-300">Intel Core i7-8700K / AMD Ryzen 7 3700X</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Memory</p>
                        <p className="text-gray-700 dark:text-gray-300">16 GB RAM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Graphics</p>
                        <p className="text-gray-700 dark:text-gray-300">NVIDIA RTX 2070 / AMD RX 5700 XT</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor size={16} className="mt-1 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Storage</p>
                        <p className="text-gray-700 dark:text-gray-300">50 GB SSD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Purchase
              </h2>

              <div className="mb-6">
                {game.discount ? (
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {discountedPrice}
                    </span>
                    <span className="text-lg line-through text-gray-500">
                      {formattedPrice}
                    </span>
                    <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                      {game.discount}% OFF
                    </span>
                  </div>
                ) : (
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formattedPrice}
                    </span>
                  </div>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Digital download includes base game
                </p>

                <div className="space-y-3">
                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    size="lg"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={handleWishlist}
                  >
                    <Heart
                      size={16}
                      className={cn("mr-2", isWishlisted && "fill-current text-red-500")}
                    />
                    {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Available Platforms
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.platform.map((platform, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Release Information
                </h3>
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {new Date(game.releaseDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {game.features.includes("Multiplayer") ? "Multiplayer" : "Single Player"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-300">
                  Need help?
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-400">
                  Have questions about this game?
                </p>
              </div>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
