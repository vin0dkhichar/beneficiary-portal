"use client";

import Link from "next/link";

export default function NotFoundPage() {
    return (
        <section className="bg-white min-h-screen flex items-center justify-center">
            <div className="py-8 px-4 max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black">
                    404
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
                    Something's missing.
                </p>
                <p className="mb-4 text-lg font-light text-black">
                    Sorry, we can't find that page.
                </p>
                <Link
                    href="/dashboard"
                    className="inline-flex text-black bg-[#D9D9D9] font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
                >
                    Back to Homepage
                </Link>
            </div>
        </section>
    );
}
