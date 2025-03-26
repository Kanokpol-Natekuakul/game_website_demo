import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled = false,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50";

    const variantStyles = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500",
      secondary: "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 focus-visible:ring-indigo-500",
      outline: "border border-indigo-200 bg-transparent hover:bg-indigo-100 focus-visible:ring-indigo-500",
      ghost: "bg-transparent hover:bg-indigo-100 focus-visible:ring-indigo-500",
      danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4",
      lg: "h-12 px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          isLoading && "cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Loading...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface ButtonLinkProps extends LinkProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const ButtonLink = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500",
    secondary: "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 focus-visible:ring-indigo-500",
    outline: "border border-indigo-200 bg-transparent hover:bg-indigo-100 focus-visible:ring-indigo-500",
    ghost: "bg-transparent hover:bg-indigo-100 focus-visible:ring-indigo-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <Link
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export { Button };
