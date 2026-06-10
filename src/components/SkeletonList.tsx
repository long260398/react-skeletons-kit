import { Skeleton } from './Skeleton'

interface SkeletonListProps {
  count?: number
  avatar?: boolean
}

export function SkeletonList({ count = 4, avatar = true }: SkeletonListProps) {
  return (
    <div className="skeleton-list">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-list-item">
          {avatar && <Skeleton width={40} height={40} borderRadius="50%" />}
          <div className="skeleton-list-content">
            <Skeleton height={14} width="45%" />
            <Skeleton height={12} width="70%" />
          </div>
        </div>
      ))}
    </div>
  )
}
