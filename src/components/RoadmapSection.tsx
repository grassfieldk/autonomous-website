/**
 * Roadmap Item interface
 */
export interface RoadmapItem {
  title: string;
  description: string;
  status?: "planned" | "in-progress" | "completed";
  updatedAt?: string;
}

/**
 * Roadmap Item Props
 */
export interface RoadmapItemProps {
  item: RoadmapItem;
  isLast?: boolean;
  nextItemStatus?: "planned" | "in-progress" | "completed";
}

/**
 * Roadmap Section Props
 */
export interface RoadmapSectionProps {
  items: RoadmapItem[];
  className?: string;
}

/**
 * Roadmap Item Component
 *
 * Displays a single roadmap item with title and description
 */
export function RoadmapItem({ item, isLast = false, nextItemStatus }: RoadmapItemProps) {
  const statusColors = {
    completed: {
      badge: "bg-primary text-white",
      line: "bg-primary",
      border: "border-primary",
    },
    "in-progress": {
      badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      line: "bg-blue-100 dark:bg-blue-900",
      border: "border-blue-100 dark:border-blue-900",
    },
    planned: {
      badge: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      line: "bg-gray-100 dark:bg-gray-800",
      border: "border-gray-100 dark:border-gray-800",
    },
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return "Planned";
    }
  };

  const getStatusColor = (status?: string) => {
    const statusKey = status as keyof typeof statusColors;
    return statusColors[statusKey]?.badge || statusColors.planned.badge;
  };

  const getLineColor = () => {
    const statusKey = nextItemStatus as keyof typeof statusColors;
    return statusColors[statusKey]?.line || "bg-border";
  };

  const getBorderColor = () => {
    const statusKey = item.status as keyof typeof statusColors;
    return statusColors[statusKey]?.border || "border-border";
  };

  return (
    <div className="relative">
      <div className={`rounded-lg border ${getBorderColor()} bg-card p-6 shadow-sm`}>
        <div className="mb-3 flex items-center justify-between">
          <h3>{item.title}</h3>
          <div className="flex flex-col items-center gap-1">
            <span
              className={`w-20 rounded-full px-2 py-1 text-center text-xs font-medium ${getStatusColor(item.status)}`}
            >
              {getStatusLabel(item.status)}
            </span>
            {item.updatedAt && (
              <span className="text-muted-foreground text-xs">{item.updatedAt}</span>
            )}
          </div>
        </div>
        <p className="text-muted-foreground whitespace-pre-wrap">{item.description}</p>
      </div>
      {!isLast && (
        <div className="flex justify-center">
          <div className={`h-8 w-1 ${getLineColor()}`}></div>
        </div>
      )}
    </div>
  );
}

/**
 * Roadmap Section Component
 *
 * Displays a section of roadmap items with single column layout
 */
export function RoadmapSection({ items, className = "" }: RoadmapSectionProps) {
  // Sort items by updatedAt (ascending) and then by status priority
  const sortedItems = [...items].sort((a, b) => {
    // First sort by date
    if (a.updatedAt && b.updatedAt) {
      const dateA = new Date(a.updatedAt);
      const dateB = new Date(b.updatedAt);
      if (dateA.getTime() !== dateB.getTime()) {
        return dateA.getTime() - dateB.getTime();
      }
    }

    // Then sort by status priority (completed < in-progress < planned)
    const statusPriority = {
      completed: 0,
      "in-progress": 1,
      planned: 2,
    };

    const priorityA = statusPriority[a.status || "planned"];
    const priorityB = statusPriority[b.status || "planned"];

    return priorityA - priorityB;
  });

  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-center">ロードマップ</h2>
      <div className="mx-auto max-w-2xl">
        <div className="space-y-0">
          {sortedItems.map((item, index) => (
            <RoadmapItem
              key={index}
              item={item}
              isLast={index === sortedItems.length - 1}
              nextItemStatus={sortedItems[index + 1]?.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
