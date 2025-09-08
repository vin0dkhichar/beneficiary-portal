"use client";
import { useState } from "react";
import { benefitsData, Benefit, getTotalAwaitedFunds, getTotalReceivedFunds } from "@/utils/benefits";
import { Pagination, TransferHistory } from "@/components";

export default function BenefitsPage() {
    const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
    const [showTransferHistory, setShowTransferHistory] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(benefitsData.length / itemsPerPage);

    const currentBenefits = benefitsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleTransferHistoryClick = (benefit: Benefit) => {
        setSelectedBenefit(benefit);
        setShowTransferHistory(true);
    };

    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Total Benefits</h1>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-black/20">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <table className="w-full text-sm font-medium text-gray-700 table-fixed">
                        <tbody className="bg-white">
                            <tr>
                                <td colSpan={2} className="px-6 py-4">
                                    <h2 className="text-base font-semibold text-gray-800">
                                        Benefits (Transfer History)
                                    </h2>
                                </td>
                                <td colSpan={4} className="px-6 py-4">
                                    <div className="flex justify-end space-x-6">
                                        <span className="text-gray-600">
                                            Total Amount:{" "}
                                            <span className="font-bold text-black">
                                                ${getTotalAwaitedFunds().toFixed(2)}
                                            </span>
                                        </span>
                                        <span className="text-gray-600">
                                            Awaited Fund:{" "}
                                            <span className="font-bold text-black">
                                                ${(getTotalAwaitedFunds() - getTotalReceivedFunds()).toFixed(2)}
                                            </span>
                                        </span>
                                        <span className="text-gray-600">
                                            Received Fund:{" "}
                                            <span className="font-bold text-black">
                                                ${getTotalReceivedFunds().toFixed(2)}
                                            </span>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mx-4 border-t-3 border-gray-300"></div>

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
                            {currentBenefits.map((benefit, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 text-gray-900 font-medium">{benefit.programName}</td>
                                    <td className="px-6 py-4 font-mono text-gray-900 text-sm">{benefit.entitlementRefNumber}</td>
                                    <td className="px-6 py-4 text-black">{benefit.awaitedFunds.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-black">{benefit.receivedFunds.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-black text-sm">{benefit.dateApproved}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            onClick={() => handleTransferHistoryClick(benefit)}
                                            className="text-black text-sm font-medium underline cursor-pointer hover:text-blue-600 transition-colors"
                                        >
                                            Transfer History
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>

            {showTransferHistory && selectedBenefit && (
                <TransferHistory
                    benefit={selectedBenefit}
                    onClose={() => setShowTransferHistory(false)}
                />
            )}
        </div>
    );
}
