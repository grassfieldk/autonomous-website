import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

/**
 * Button Variant Types
 */
export type ButtonVariant =
  | "primary"
  | "accent"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost";

/**
 * Button Size Types
 */
export type ButtonSize = "sm" | "default" | "lg";

/**
 * Base Button Props
 */
interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/**
 * HTML Button Props
 */
export interface ButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {}

/**
 * Link Button Props (for Next.js Link)
 */
export interface LinkButtonProps extends BaseButtonProps {
  href: string;
  children: ReactNode;
}

/**
 * External Link Button Props (for external URLs)
 */
export interface ExternalLinkButtonProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> {
  href: string;
}

/**
 * Get button classes based on variant and size
 */
function getButtonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "default"
): string {
  const baseClasses = "btn";
  const variantClasses = `btn-${variant}`;
  const sizeClasses = size !== "default" ? `btn-${size}` : "";

  return [baseClasses, variantClasses, sizeClasses].filter(Boolean).join(" ");
}

/**
 * Button Component (for form submissions, click handlers, etc.)
 */
export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = `${getButtonClasses(variant, size)} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

/**
 * Link Button Component (for internal navigation using Next.js Link)
 */
export function LinkButton({
  variant = "primary",
  size = "default",
  className = "",
  href,
  children,
}: LinkButtonProps) {
  const buttonClasses = `${getButtonClasses(variant, size)} ${className}`;

  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
}

/**
 * External Link Button Component (for external URLs)
 */
export function ExternalLinkButton({
  variant = "primary",
  size = "default",
  className = "",
  href,
  children,
  ...props
}: ExternalLinkButtonProps) {
  const buttonClasses = `${getButtonClasses(variant, size)} ${className}`;

  return (
    <a
      href={href}
      className={buttonClasses}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
