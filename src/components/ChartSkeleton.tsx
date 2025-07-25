import { cn } from "@/libs/utils";

interface ChartSkeletonProps {
  height?: number;
  className?: string;
  showTitle?: boolean;
  showLegend?: boolean;
}

export const ChartSkeleton = ({ 
  height = 400, 
  className,
  showTitle = true,
  showLegend = false 
}: ChartSkeletonProps) => {
  return (
    <div className={cn("animate-pulse", className)} style={{ height }}>
      {showTitle && (
        <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
      )}
      
      <div className="relative h-full bg-gray-100 rounded-lg p-4">
        {/* Y-axis labels */}
        <div className="absolute left-2 top-8 space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-3 w-8 bg-gray-200 rounded"></div>
          ))}
        </div>
        
        {/* Chart area */}
        <div className="ml-12 mr-4 h-full flex items-end justify-between space-x-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 rounded-t w-full"
              style={{
                height: `${Math.random() * 60 + 20}%`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* X-axis labels */}
        <div className="ml-12 mr-4 mt-2 flex justify-between">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-3 w-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
      
      {showLegend && (
        <div className="flex justify-center mt-4 space-x-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};