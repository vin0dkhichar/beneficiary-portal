"use client";
import { useState } from "react";
import ApplyProgramForm from "./ApplyProgramForm";

type ProgramStatus = "Apply" | "Applied" | "Pending" | "Enrolled";

interface Program {
    name: string;
    status: ProgramStatus;
    id: string;
    appliedDate: string;
}

const programsData: Program[] = [
    {
        name: "Social Safety Net Program",
        status: "Apply",
        id: "1010101010",
        appliedDate: "2025-09-01 10:30 AM",
    },
    {
        name: "Pension Yojana",
        status: "Applied",
        id: "2025202501",
        appliedDate: "2025-08-15 09:10 AM",
    },
    {
        name: "LPG Subsidy",
        status: "Pending",
        id: "5050505050",
        appliedDate: "2025-08-25 05:45 PM",
    },
    {
        name: "PM-KISAN Farmer Support",
        status: "Enrolled",
        id: "3030303030",
        appliedDate: "2025-08-10 02:15 PM",
    },
    {
        name: "Ayushman Bharat Health Scheme",
        status: "Applied",
        id: "4040404040",
        appliedDate: "2025-08-20 11:45 AM",
    },
    {
        name: "Pradhan Mantri Awas Yojana",
        status: "Enrolled",
        id: "6060606060",
        appliedDate: "2025-07-25 03:30 PM",
    },
    {
        name: "National Rural Employment Guarantee",
        status: "Apply",
        id: "7070707070",
        appliedDate: "2025-08-05 09:20 AM",
    },
    {
        name: "Skill Development Program",
        status: "Enrolled",
        id: "8080808080",
        appliedDate: "2025-07-15 04:10 PM",
    },
];

export default function ProgramsPage() {
    const [openForm, setOpenForm] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

    const total = programsData.length;
    const applied = programsData.filter((p) => p.status === "Applied").length;
    const enrolled = programsData.filter((p) => p.status === "Enrolled").length;

    const getStatusBadge = (status: ProgramStatus, program: Program) => {
        const baseClasses = "inline-flex px-2 py-1 text-xs font-medium rounded-full cursor-pointer";
        switch (status) {
            case "Apply":
                return (
                    <span
                        onClick={() => {
                            setSelectedProgram(program);
                            setOpenForm(true);
                        }}
                        className={`${baseClasses} bg-green-100 text-green-800 hover:bg-green-200`}
                    >
                        Apply
                    </span>
                );
            case "Applied":
                return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Applied</span>;
            case "Enrolled":
                return <span className={`${baseClasses} bg-purple-100 text-purple-800`}>Enrolled</span>;
            case "Pending":
                return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Pending</span>;
            default:
                return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
        }
    };

    return (
        <div className="p-6 min-h-screen bg-gray-50">
            {/* Page title with line below */}
            <div className="mb-2">
                <h1 className="text-xl font-bold text-gray-800">
                    My Programs
                </h1>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header with stats aligned */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <table className="w-full text-sm font-medium text-gray-700 table-fixed">
                        <colgroup>
                            <col style={{ width: "33.33%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "16.67%" }} />
                        </colgroup>
                        <tbody className="bg-white">
                            <tr>
                                <td className="px-10 py-4">
                                    <h2 className="text-base font-semibold text-gray-800">
                                        All Programs
                                    </h2>
                                </td>
                                <td className="px-7 py-4">
                                    <span className="text-gray-600">
                                        Total Programs:{" "}
                                    </span>
                                    <span className="font-bold text-gray-800">
                                        {total}
                                    </span>
                                </td>
                                <td className="px-5 py-4">
                                    <span className="text-gray-600">
                                        Applied:{" "}
                                    </span>
                                    <span className="font-bold text-blue-600">
                                        {applied}
                                    </span>
                                </td>
                                <td className="px-3 py-4">
                                    <span className="text-gray-600">
                                        Enrolled:{" "}
                                    </span>
                                    <span className="font-bold text-green-600">
                                        {enrolled}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mx-4 border-t-3 border-gray-300"></div>

                {/* Data Table */}
                <div className="overflow-x-auto px-4">
                    <table className="w-full text-left border-collapse table-fixed">
                        <colgroup>
                            <col style={{ width: "33.33%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "16.67%" }} />
                        </colgroup>
                        <thead className="text-gray-700 border-b-3 border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">
                                    Program Name
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">
                                    Application Status
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">
                                    Application ID
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider">
                                    Applied Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-3 divide-gray-200">
                            {programsData.map((program, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <td className="px-6 py-4 text-gray-900 font-medium">
                                        {program.name}
                                    </td>
                                    <td className="px-6 py-4">{getStatusBadge(program.status, program)}</td>
                                    <td className="px-6 py-4 font-mono text-gray-700 text-sm">
                                        {program.id}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">
                                        {program.appliedDate}
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
            {openForm && selectedProgram && (
                <ApplyProgramForm program={selectedProgram} onClose={() => setOpenForm(false)} />
            )}
        </div>
    );
}
