import { Skeleton } from './Skeleton'

interface SkeletonTextProps {
  lines?: number
  lastLineWidth?: string
}

export function SkeletonText({ lines = 3, lastLineWidth = '60%' }: SkeletonTextProps) {
  return (
    <div className="skeleton-text">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={14}
          width={i === lines - 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  )
}
