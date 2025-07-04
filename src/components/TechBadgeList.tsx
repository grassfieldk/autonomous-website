import { Badge, BadgeVariant } from "./ui";

/**
 * Technology Badge Item
 */
export interface TechBadgeItem {
  name: string;
  variant?: BadgeVariant;
  url?: string;
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
        <div key={index}>
          {tech.url ? (
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Badge variant={tech.variant}>{tech.name}</Badge>
            </a>
          ) : (
            <Badge variant={tech.variant}>{tech.name}</Badge>
          )}
        </div>
      ))}
    </div>
  );
}
