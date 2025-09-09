"use client";
import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Header, Sidebar } from "@/components";
import { routeToIndex, noLayoutRoutes } from "@/utils/navigation";


interface CommonLayoutProps {
    children: ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!pathname) return;

        // Find parent route for nested pages
        let parentRoute = pathname;
        while (!routeToIndex[parentRoute] && parentRoute !== "/") {
            parentRoute = parentRoute.substring(0, parentRoute.lastIndexOf("/")) || "/";
        }

        const index = routeToIndex[parentRoute] ?? 0;
        setActiveItem(index);
    }, [pathname]);

    const handleSidebarItemClick = (index: number, href: string) => {
        setActiveItem(index);
        router.push(href);
    };

    if (!isClient) {
        return null;
    }

    const isValidRoute = Object.keys(routeToIndex).some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );
    if (!isValidRoute || noLayoutRoutes.includes(pathname)) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            <Sidebar activeItem={activeItem} onItemClick={handleSidebarItemClick} />
            <div className="transition-all duration-300 ease-in-out flex-1 pt-[70px] ml-[60px] lg:ml-[60px]">
                {children}
            </div>
        </>
    );
}
