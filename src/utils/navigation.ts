export type MenuItem = {
    name: string;
    href: string;
};

export const menuItems: MenuItem[] = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Programs", href: "/programs" },
    { name: "Total Benefits", href: "/benefits" },
    { name: "Bank Accounts", href: "/accounts" },
    { name: "My Registries", href: "/registries" },
    { name: "Applicable Schemes", href: "/schemes" },
    { name: "Notifications", href: "/notifications" },
    { name: "Complaints", href: "/complaints" },
];

export const routeToIndex: Record<string, number> = menuItems.reduce(
    (acc, item, index) => {
        acc[item.href] = index;
        return acc;
    },
    {} as Record<string, number>
);

export const noLayoutRoutes = ["/", "/login"];
