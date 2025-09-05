"use client";
import Image from "next/image";

export default function Header() {
    const profile = {
        given_name: "John Smith",
        picture: "/login.png"
    };

    return (
        <header className="w-full bg-[#D9D9D9] shadow-md flex items-center justify-between px-6 py-3 fixed top-0 left-0 right-0 z-20 h-[70px]">
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
                <Image
                    src="/header.png"
                    alt="Logo"
                    width={40}
                    height={40}
                />
                <span className="text-xl font-semibold text-gray-800">
                    Beneficiary Portal
                </span>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
                {/* Notification Icon */}
                <button className="relative">
                    <Image
                        src="/notification.png"
                        alt="Notifications"
                        width={24}
                        height={24}
                    />
                </button>

                {/* Profile name + image */}
                <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">
                        Hi, {profile?.given_name || "User"}
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                        <img
                            src={profile?.picture || "/default-avatar.png"}
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
