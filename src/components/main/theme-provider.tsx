"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";
import { MotionConfig } from "framer-motion";
import * as React from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            {/* reducedMotion="user" makes every Motion animation honor the OS
                setting (skips transforms, keeps opacity) without each component
                branching its rendered output, so SSR and client stay in sync. */}
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </NextThemesProvider>
    );
}
