"use client";
import Image from "next/image";
import { SyntheticEvent } from "react";
import { LoginProviders } from "@/components";

export default function LoginForm() {
    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        console.log("Login submitted");
    }

    return (
        <div className="w-[450px] bg-[#D9D9D9] rounded-lg shadow-lg flex flex-col items-center p-6">
            <Image
                src="/login.png"
                alt="Beneficiary Portal Logo"
                width={80}
                height={80}
                priority
                className="mb-4"
            />

            <p className="text-2xl font-semibold text-black mb-6">Beneficiary Portal</p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 px-8">
                <div className="flex flex-col">
                    <label className="mb-1 text-md font-medium text-black">
                        Email or Phone
                    </label>
                    <input
                        type="text"
                        className="px-3 py-2 text-black bg-white border-gray-400 border rounded-md focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 text-md font-medium text-black">Password</label>
                    <input
                        type="password"
                        className="px-3 py-2 text-black bg-white border-gray-400 border rounded-md focus:outline-none"
                    />
                    <div className="flex justify-end mt-1">
                        <a
                            href="/reset-password"
                            className="text-sm text-gray-600 hover:underline"
                        >
                            Reset Password?
                        </a>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full bg-black text-lg text-white py-2 rounded-md font-semibold hover:bg-gray-950 transition cursor-pointer"
                >
                    LOGIN
                </button>

                <LoginProviders />
            </form>
        </div>
    );
}
