import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CalloutProps {
    children?: ReactNode
    type?: 'default' | 'warning' | 'danger'
}

export function Callout({ children, type = 'default', ...props }: CalloutProps) {
    return (
        <div
            className={cn(
                'boder-l-4 my-6 w-full items-start rounded-md border p-4 dark:max-w-none',
                {
                    'bg-red-3000 prose border-red-900 dark:prose': type === 'danger',
                    'prose border-yellow-900 bg-yellow-200 dark:prose': type === 'warning',
                }
            )}
            {...props}
        >
            <div>{children}</div>
        </div>
    )
}
