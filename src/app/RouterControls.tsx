"use client"
import { PageTransition } from '@Layouts/TransitionPage';
import { usePathname } from "next/navigation";

interface IRouterControls {
    children: React.ReactNode
}

export default function RouterControls({ children }: IRouterControls) {
    console.log("##############   RouterControls render")
    const pathName = usePathname()
    return (
        <PageTransition transitionKey={pathName}>
            {children}
        </PageTransition>
    )
}
