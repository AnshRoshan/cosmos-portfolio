import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CalloutProps {
    children?: ReactNode;
    type?: "default" | "warning" | "danger";
}

export function Callout({
    children,
    type = "default",
    ...props
}: CalloutProps) {
    return (
        <div
            className={cn(
                "boder-l-4 my-6 w-full items-start rounded-md border p-4 dark:max-w-none",
                {
                    "prose dark:prose border-red-900 bg-red-3000":
                        type === "danger",
                    "prose dark:prose border-yellow-900 bg-yellow-200":
                        type === "warning",
                }
            )}
            {...props}
        >
            <div>{children}</div>
        </div>
    );
}
