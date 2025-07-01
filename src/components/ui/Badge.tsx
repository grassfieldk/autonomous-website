import { ReactNode } from "react";

/**
 * Badge Variant Types
 */
export type BadgeVariant = "primary" | "secondary" | "destructive";

/**
 * Badge Component Props
 */
export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

/**
 * Badge Component
 */
export function Badge({ variant = "primary", children, className = "" }: BadgeProps) {
  const badgeClasses = `badge badge-${variant} ${className}`;

  return <span className={badgeClasses}>{children}</span>;
}
