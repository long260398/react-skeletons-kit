import { Skeleton } from './Skeleton'

interface SkeletonCardProps {
  count?: number
}

export function SkeletonCard({ count = 1 }: SkeletonCardProps) {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <Skeleton height={160} borderRadius="0" />
          <div className="skeleton-card-body">
            <Skeleton height={18} width="60%" />
            <Skeleton height={13} />
            <Skeleton height={13} width="75%" />
          </div>
        </div>
      ))}
    </div>
  )
}
