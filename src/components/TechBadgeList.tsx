import { Badge, BadgeVariant } from "./ui";

/**
 * Technology Badge Item
 */
export interface TechBadgeItem {
  name: string;
  variant?: BadgeVariant;
}

/**
 * Tech Badge List Props
 */
export interface TechBadgeListProps {
  technologies: TechBadgeItem[];
  className?: string;
}

/**
 * Tech Badge List Component
 *
 * Displays a list of technology badges in a flex layout
 */
export function TechBadgeList({ technologies, className = "" }: TechBadgeListProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {technologies.map((tech, index) => (
        <Badge key={index} variant={tech.variant}>
          {tech.name}
        </Badge>
      ))}
    </div>
  );
}
