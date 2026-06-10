import { Skeleton } from './Skeleton'

interface SkeletonTableProps {
  rows?: number
  columns?: number
}

export function SkeletonTable({ rows = 5, columns = 4 }: SkeletonTableProps) {
  return (
    <div>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="skeleton-table-row"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIdx) => (
            <Skeleton key={colIdx} height={14} width={colIdx === 0 ? '60%' : '100%'} />
          ))}
        </div>
      ))}
    </div>
  )
}
