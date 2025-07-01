import { ReactNode } from "react";

/**
 * Card Component Props
 */
export interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card Header Component Props
 */
export interface CardHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

/**
 * Card Content Component Props
 */
export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card Footer Component Props
 */
export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

/**
 * Base Card Component
 */
export function Card({ children, className = "" }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}

/**
 * Card Header Component
 */
export function CardHeader({ title, description, className = "" }: CardHeaderProps) {
  return (
    <div className={`card-header ${className}`}>
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
    </div>
  );
}

/**
 * Card Content Component
 */
export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`card-content ${className}`}>{children}</div>;
}

/**
 * Card Footer Component
 */
export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`card-footer ${className}`}>{children}</div>;
}
