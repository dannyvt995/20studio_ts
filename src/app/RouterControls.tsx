"use client"


import { PageTransition } from '@Layouts/TransitionPage';

import { usePathname } from "next/navigation";


/* const listPathAndIdDom = {
    pages: [
        '/',
        '/home',
        '/work',
        '/contact',
        '/about'
    ],
    pagesWork: [
        '/work/work1',
        '/work/work2',
        '/work/work3',
        '/work/work4'
    ],
    idpages: [
        '#homepage',
        '#aboutpage',
        '#workpage',
        '#contactpage'
    ],
    idpagesWork: [
        '#work1page',
        '#work2page',
        '#work3page',
        '#work4page'
    ]
}
const pages = [
    {
        path: "/home",
        title: "Page home",
        color: "#03a9f4"
    },
    {
        path: "/about",
        title: "Page about",
        color: "#4caf50"
    },
    {
        path: "/contact",
        title: "Page contact",
        color: "#ff9c07"
    },
    {
        path: "/work",
        title: "Page work",
        color: "#F44336"
    }
];

 */
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
