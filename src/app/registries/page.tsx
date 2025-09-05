"use client";
import { useState } from "react";
import UpdateRegistryForm, { Registry } from "./UpdateRegistryForm";

const myRegistries: Registry[] = [
    { name: "My Healthcare Registry", id: "12938475639", date: "15/08/2025", action: "Update" },
    { name: "My Employment Registry", id: "84756392013", date: "05/08/2025", action: "Update" },
    { name: "My Housing Registry", id: "56473829102", date: "22/07/2025", action: "Update" },
    { name: "My Education Registry", id: "93847561029", date: "10/07/2025", action: "Update" },
    { name: "My Pension Registry", id: "38475619283", date: "28/06/2025", action: "Update" },
    { name: "My Food Security Registry", id: "74638291028", date: "15/06/2025", action: "Update" },
    { name: "My Skill Development Registry", id: "18273645563", date: "05/06/2025", action: "Update" },
    { name: "My Social Welfare Registry", id: "92837465547", date: "25/05/2025", action: "Update" },
];

export default function RegistriesPage() {
    const [openForm, setOpenForm] = useState(false);
    const [selectedRegistry, setSelectedRegistry] = useState<Registry | null>(null);

    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <div className="mb-6">
                <h1 className="text-xl font-bold text-gray-800">My Registries</h1>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto px-4">
                    <table className="w-full text-left border-collapse table-fixed">
                        <thead className="text-gray-700 border-b-3 border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">Registries</th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">ID</th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">Date</th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-gray-200">
                            {myRegistries.map((registry, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <td className="px-6 py-4 text-gray-900 font-medium">{registry.name}</td>
                                    <td className="px-6 py-4 font-mono text-gray-700 text-sm">{registry.id}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{registry.date}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                            onClick={() => {
                                                setSelectedRegistry(registry);
                                                setOpenForm(true);
                                            }}
                                        >
                                            {registry.action}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center space-x-2 py-4">
                        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
                            ←
                        </button>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
                            2
                        </button>
                        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
                            3
                        </button>
                        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
                            →
                        </button>
                    </div>
                </div>
            </div>

            {openForm && selectedRegistry && (
                <UpdateRegistryForm
                    registry={selectedRegistry}
                    onClose={() => setOpenForm(false)}
                />
            )}
        </div>
    );
}
