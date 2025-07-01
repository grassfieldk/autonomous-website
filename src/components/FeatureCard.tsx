import { Card, CardHeader, CardContent } from "./ui";

/**
 * Feature Card Props
 */
export interface FeatureCardProps {
  title: string;
  description: string;
  content: string;
  className?: string;
}

/**
 * Feature Card Component
 *
 * Displays feature information in a consistent card layout
 */
export function FeatureCard({
  title,
  description,
  content,
  className = "",
}: FeatureCardProps) {
  return (
    <Card className={`text-left ${className}`}>
      <CardHeader title={title} description={description} />
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
