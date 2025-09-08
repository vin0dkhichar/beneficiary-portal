"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Header, Sidebar } from "@/components";

const routeToIndex: Record<string, number> = {
    "/dashboard": 0,
    "/programs": 1,
    "/benefits": 2,
    "/accounts": 3,
    "/registries": 4,
    "/schemes": 5,
    "/notifications": 6,
    "/complaints": 7,
};

const noLayoutRoutes = ["/", "/login"];

interface CommonLayoutProps {
    children: ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(0);

    useEffect(() => {
        const index = routeToIndex[pathname] ?? 0;
        setActiveItem(index);
    }, [pathname]);

    const handleSidebarItemClick = (index: number, href: string) => {
        setActiveItem(index);
        router.push(href);
    };

    if (noLayoutRoutes.includes(pathname)) {
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
