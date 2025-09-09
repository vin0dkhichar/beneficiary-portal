"use client";
import { useState } from "react";
import Image from "next/image";

const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Programs", href: "/programs" },
    { name: "Total Benefits", href: "/benefits" },
    { name: "Bank Accounts", href: "/accounts" },
    { name: "My Registries", href: "/registries" },
    { name: "Applicable Schemes", href: "/schemes" },
    { name: "Notifications", href: "/notifications" },
    { name: "Complaints", href: "/complaints" },
];

interface SidebarProps {
    activeItem?: number;
    onItemClick?: (index: number, href: string) => void;
}

export default function Sidebar({ activeItem = 0, onItemClick }: SidebarProps) {
    const [expanded, setExpanded] = useState(false);

    const handleItemClick = (index: number) => {
        if (onItemClick) {
            onItemClick(index, menuItems[index].href);
        }
    };

    return (
        <div
            className={`bg-[#D9D9D9] border-r border-gray-100 fixed top-[70px] left-0 bottom-0 transition-all duration-300 ease-in-out ${expanded ? "w-[250px]" : "w-[60px]"
                } z-10`}
        >
            <div className="flex items-center justify-center h-16 border-b border-gray-200">
                {!expanded ? (
                    <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setExpanded(true)}
                    >
                        <Image
                            src="/bar.png"
                            alt="Menu"
                            width={24}
                            height={24}
                            priority
                            style={{ objectFit: "contain" }}
                        />
                    </button>
                ) : (
                    <div className="flex items-center justify-between w-full px-4">
                        <span className="font-semibold text-gray-800">Menu</span>
                        <button
                            className="p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                            onClick={() => setExpanded(false)}
                        >
                            <Image
                                src="/x.png"
                                alt="Close"
                                width={20}
                                height={20}
                                priority
                                style={{ objectFit: "contain" }}
                            />
                        </button>
                    </div>
                )}
            </div>

            <div className="py-4">
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center cursor-pointer transition-all duration-200 mx-2 my-3 rounded-lg ${activeItem === idx
                            ? "bg-blue-100 text-blue-700"
                            : "text-black hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        onClick={() => handleItemClick(idx)}
                    >
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center pr-1">
                            <div className="bg-gray-400 rounded-full w-8 h-8 p-1"></div>
                        </div>

                        <span
                            className={`transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden ${expanded
                                ? "opacity-100 max-w-full ml-2"
                                : "opacity-0 max-w-0 ml-0"
                                }`}
                        >
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}