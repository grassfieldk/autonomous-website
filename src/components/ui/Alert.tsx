import { ReactNode } from "react";

/**
 * Alert Variant Types
 */
export type AlertVariant = "info" | "success" | "warning" | "error";

/**
 * Alert Component Props
 */
export interface AlertProps {
  variant?: AlertVariant;
  children: ReactNode;
  className?: string;
}

/**
 * Alert Component
 */
export function Alert({ variant = "info", children, className = "" }: AlertProps) {
  const alertClasses = `alert alert-${variant} ${className}`;

  return <div className={alertClasses}>{children}</div>;
}
