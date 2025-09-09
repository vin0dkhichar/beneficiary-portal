"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);
    }, []);

    const handleGetStarted = () => {
        if (isLoggedIn) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
            <div className="flex flex-col items-center text-center">
                <Image
                    src="/logo.png"
                    alt="Logo Image"
                    width={100}
                    height={100}
                    priority={true}
                    className="rounded-xl shadow-md mb-6"
                />
                <div className="w-[739px]">
                    <p className="text-3xl font-bold text-black mb-2 w-full">
                        Welcome to OpenG2P Beneficiary Portal
                    </p>
                    <p className="text-lg text-black mb-4 w-full whitespace-pre-line">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        <span className="whitespace-nowrap">remaining essentially unchanged.</span>
                    </p>
                </div>
            </div>

            <button
                onClick={handleGetStarted}
                className="w-[200px] h-[40px] bg-black text-white text-xl font-semibold rounded-md shadow 
                           transition hover:bg-gray-950 flex items-center justify-center cursor-pointer"
            >
                GET STARTED
            </button>
        </main>
    );
}