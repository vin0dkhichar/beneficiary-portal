"use client";

import { Programs } from "@/components";

export default function ProgramsPage() {
    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <div className="mb-2">
                <h1 className="text-xl font-bold text-gray-800">My Programs</h1>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg overflow-hidden border border-black/20">
                <Programs />
            </div>
        </div >
    );
}
