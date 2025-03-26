import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

export interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
  price?: number | string | null;
  discount?: number;
  className?: string;
}

export function GameCard({
  id,
  title,
  imageUrl,
  category,
  rating,
  price,
  discount,
  className,
}: GameCardProps) {
  const formattedPrice = typeof price === "number" ? `$${price.toFixed(2)}` : price;
  const discountedPrice = discount && typeof price === "number"
    ? `$${(price - (price * discount / 100)).toFixed(2)}`
    : null;

  return (
    <div className={cn("group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800", className)}>
      <Link to={`/games/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {discount && (
            <div className="absolute left-2 top-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {discount}% OFF
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-lg font-bold text-white line-clamp-1">{title}</h3>
            <span className="inline-block rounded bg-gray-900/80 px-2 py-1 text-xs text-white">
              {category}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className={cn(
                  "fill-current",
                  index < Math.floor(rating)
                    ? "text-yellow-400"
                    : index < rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                )}
              />
            ))}
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              {rating.toFixed(1)}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            {price ? (
              <div className="flex flex-col">
                {discountedPrice ? (
                  <>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {discountedPrice}
                    </span>
                    <span className="text-sm line-through text-gray-500">
                      {formattedPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-gray-800 dark:text-white">
                    {formattedPrice}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-lg font-bold text-green-600 dark:text-green-400">
                Free
              </span>
            )}
            <button
              className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
              aria-label={`Add ${title} to wishlist`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
