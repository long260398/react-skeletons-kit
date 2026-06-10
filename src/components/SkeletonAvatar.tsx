import { Skeleton } from './Skeleton'

interface SkeletonAvatarProps {
  size?: number
  count?: number
}

export function SkeletonAvatar({ size = 48, count = 1 }: SkeletonAvatarProps) {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} width={size} height={size} borderRadius="50%" />
      ))}
    </div>
  )
}
