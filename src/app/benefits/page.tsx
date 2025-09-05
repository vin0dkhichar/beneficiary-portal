"use client";
import { useState } from "react";
import TransferHistory from "./TransferHistory";

interface Benefit {
    programName: string;
    entitlementRefNumber: string;
    awaitedFunds: number;
    receivedFunds: number;
    dateApproved: string;
}

const benefitsData: Benefit[] = [
    {
        programName: "openg2p-safety-net-program",
        entitlementRefNumber: "983789327978",
        awaitedFunds: 45000,
        receivedFunds: 30000,
        dateApproved: "01/09/2025",
    },
    {
        programName: "PM-KISAN Farmer Support",
        entitlementRefNumber: "875643219876",
        awaitedFunds: 15000,
        receivedFunds: 15000,
        dateApproved: "15/08/2025",
    },
    {
        programName: "LPG Subsidy",
        entitlementRefNumber: "546372819045",
        awaitedFunds: 2400,
        receivedFunds: 800,
        dateApproved: "25/08/2025",
    },
    {
        programName: "Direct Benefit Transfer Scheme",
        entitlementRefNumber: "729384756102",
        awaitedFunds: 8500,
        receivedFunds: 0,
        dateApproved: "30/08/2025",
    },
    {
        programName: "Pradhan Mantri Awas Yojana",
        entitlementRefNumber: "392847561829",
        awaitedFunds: 120000,
        receivedFunds: 60000,
        dateApproved: "25/07/2025",
    },
];

export default function BenefitsPage() {
    const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
    const [showTransferHistory, setShowTransferHistory] = useState(false);

    const totalAwaitedFunds = benefitsData.reduce((sum, benefit) => sum + benefit.awaitedFunds, 0);
    const totalReceivedFunds = benefitsData.reduce((sum, benefit) => sum + benefit.receivedFunds, 0);

    const handleTransferHistoryClick = (benefit: Benefit) => {
        setSelectedBenefit(benefit);
        setShowTransferHistory(true);
    };

    return (
        <div className="p-6 min-h-screen bg-gray-50">
            {/* Page title */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Total Benefits</h1>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header with stats */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <table className="w-full text-sm font-medium text-gray-700 table-fixed">
                        <tbody className="bg-white">
                            <tr>
                                {/* Left side (title) */}
                                <td colSpan={2} className="px-6 py-4">
                                    <h2 className="text-base font-semibold text-gray-800">
                                        Benefits (Transfer History)
                                    </h2>
                                </td>

                                {/* Right side (totals) */}
                                <td colSpan={4} className="px-6 py-4">
                                    <div className="flex justify-end space-x-6">
                                        <span className="text-gray-600">
                                            Total Amount:{" "}
                                            <span className="font-bold text-gray-800">
                                                ${totalAwaitedFunds.toLocaleString()}
                                            </span>
                                        </span>
                                        <span className="text-gray-600">
                                            Awaited Fund:{" "}
                                            <span className="font-bold text-orange-600">
                                                ${(totalAwaitedFunds - totalReceivedFunds).toLocaleString()}
                                            </span>
                                        </span>
                                        <span className="text-gray-600">
                                            Received Fund:{" "}
                                            <span className="font-bold text-green-600">
                                                ${totalReceivedFunds.toLocaleString()}
                                            </span>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className="mx-4 border-t-2 border-gray-300"></div>

                {/* Data Table */}
                <div className="overflow-x-auto px-4">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Program Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Entitlement Reference Number</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Awaited Funds ($)</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Received Funds ($)</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Date Approved</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {benefitsData.map((benefit, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 text-gray-900 font-medium">{benefit.programName}</td>
                                    <td className="px-6 py-4 font-mono text-gray-700 text-sm">
                                        {benefit.entitlementRefNumber}
                                    </td>
                                    <td className="px-6 py-4 text-orange-600 font-semibold">
                                        ${benefit.awaitedFunds.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-green-600 font-semibold">
                                        ${benefit.receivedFunds.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{benefit.dateApproved}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleTransferHistoryClick(benefit)}
                                            className="inline-flex px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                                        >
                                            Transfer History
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

            {/* ✅ Imported Modal */}
            {showTransferHistory && selectedBenefit && (
                <TransferHistory
                    benefit={selectedBenefit}
                    onClose={() => setShowTransferHistory(false)}
                />
            )}
        </div>
    );
}
