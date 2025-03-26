import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GameCard } from "../components/game-card/game-card";
import { Button } from "../components/ui/button";
import { allGames, Game } from "../data/games";
import { Filter, Search } from "lucide-react";

type SortOption = "rating" | "price-low" | "price-high" | "newest";

export function GamesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredGames, setFilteredGames] = useState<Game[]>(allGames);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    searchParams.get("category")
  );
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    "All",
    "Action RPG",
    "Fantasy RPG",
    "Racing",
    "Space Simulation",
    "Stealth Action",
    "Multiplayer",
    "Survival",
    "Strategy",
    "Adventure",
    "Sports",
    "RPG",
    "Music",
  ];

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let result = [...allGames];

    // Filter by search term
    if (searchTerm) {
      result = result.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory && activeCategory !== "All") {
      result = result.filter(
        (game) => game.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Sort the games
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        result.sort((a, b) => {
          if (a.price === null) return -1;
          if (b.price === null) return 1;
          return Number(a.price) - Number(b.price);
        });
        break;
      case "price-high":
        result.sort((a, b) => {
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return Number(b.price) - Number(a.price);
        });
        break;
      case "newest":
        result.sort((a, b) =>
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        );
        break;
      default:
        break;
    }

    setFilteredGames(result);
  }, [activeCategory, sortBy, searchTerm, searchParams]);

  const handleCategoryChange = (category: string) => {
    const newCategory = category === "All" ? null : category;
    setActiveCategory(newCategory);

    if (newCategory) {
      setSearchParams({ category: newCategory });
    } else {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
  };

  const handleSortChange = (option: SortOption) => {
    setSortBy(option);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Games
            </h1>

            <div className="flex items-center space-x-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </form>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-1 md:hidden"
              >
                <Filter size={18} />
                <span>Filters</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-lg mb-3 text-gray-900 dark:text-white">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition ${
                        (category === "All" && !activeCategory) ||
                        activeCategory === category
                          ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-lg mb-3 text-gray-900 dark:text-white">
                  Sort By
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleSortChange("rating")}
                    className={`block w-full text-left px-3 py-2 rounded-md transition ${
                      sortBy === "rating"
                        ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Top Rated
                  </button>
                  <button
                    onClick={() => handleSortChange("price-low")}
                    className={`block w-full text-left px-3 py-2 rounded-md transition ${
                      sortBy === "price-low"
                        ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => handleSortChange("price-high")}
                    className={`block w-full text-left px-3 py-2 rounded-md transition ${
                      sortBy === "price-high"
                        ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Price: High to Low
                  </button>
                  <button
                    onClick={() => handleSortChange("newest")}
                    className={`block w-full text-left px-3 py-2 rounded-md transition ${
                      sortBy === "newest"
                        ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Newest First
                  </button>
                </div>
              </div>
            </div>

            {/* Filters - Mobile */}
            {isFilterOpen && (
              <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="mb-4">
                  <h3 className="font-medium text-lg mb-3 text-gray-900 dark:text-white">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          (category === "All" && !activeCategory) ||
                          activeCategory === category
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-3 text-gray-900 dark:text-white">
                    Sort By
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleSortChange("rating")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        sortBy === "rating"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      Top Rated
                    </button>
                    <button
                      onClick={() => handleSortChange("price-low")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        sortBy === "price-low"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => handleSortChange("price-high")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        sortBy === "price-high"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      Price: High to Low
                    </button>
                    <button
                      onClick={() => handleSortChange("newest")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        sortBy === "newest"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      Newest First
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Game Grid */}
            <div className="flex-1">
              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredGames.map((game) => (
                    <GameCard
                      key={game.id}
                      id={game.id}
                      title={game.title}
                      imageUrl={game.imageUrl}
                      category={game.category}
                      rating={game.rating}
                      price={game.price}
                      discount={game.discount}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="text-gray-400 dark:text-gray-600 mb-4">
                    <Search size={64} />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No games found
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    We couldn't find any games matching your search criteria.
                    Try adjusting your filters or search term.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
