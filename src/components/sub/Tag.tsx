import Link from 'next/link'
import { slug } from 'github-slugger'
import { badgeVariants } from '../ui/badge'
import { cn } from '@/lib/utils'
interface TagProps {
    tag: string
    current?: boolean
    count?: number
    tailwind?: string
}
export function Tag({ tag, current, count, tailwind }: TagProps) {
    return (
        <Link
            className={cn(
                badgeVariants({
                    variant: current ? 'default' : 'secondary',
                    className: 'rounded-md no-underline',
                }),
                tailwind
            )}
            href={`/tags/${slug(tag)}`}
        >
            {tag}
            {count ? `(${count})` : null}
        </Link>
    )
}
