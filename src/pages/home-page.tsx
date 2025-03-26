import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { GameCard } from "../components/game-card/game-card";
import { Button, ButtonLink } from "../components/ui/button";
import { featuredGames, popularGames, newReleases } from "../data/games";

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://playism.com/wp-content/uploads/2024/12/01_Bladechimera_1920x1080.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Discover Your Next Gaming Adventure
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Explore thousands of games across all genres and platforms. From indie gems to AAA blockbusters, find your perfect gaming experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink to="/games" size="lg">
                Browse Games
              </ButtonLink>
              <Button variant="secondary" size="lg">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Featured Games
            </h2>
            <Link
              to="/games?category=featured"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
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
        </div>
      </section>

      {/* Popular Now Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Popular Now
            </h2>
            <Link
              to="/games?category=popular"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGames.map((game) => (
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
        </div>
      </section>

      {/* New Releases Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              New Releases
            </h2>
            <Link
              to="/games?category=new"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newReleases.map((game) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join the Gaming Community?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-indigo-100">
            Create your free account to track your favorite games, share reviews, and connect with gamers worldwide.
          </p>
          <ButtonLink to="/signup" size="lg" variant="secondary">
            Sign Up for Free
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
