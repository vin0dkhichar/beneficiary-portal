"use client";
import React from "react";

interface Benefit {
    programName: string;
    entitlementRefNumber: string;
    awaitedFunds: number;
    receivedFunds: number;
    dateApproved: string;
}

interface TransferHistoryProps {
    benefit: Benefit;
    onClose: () => void;
}

const TransferHistory = ({ benefit, onClose }: TransferHistoryProps) => {
    // Sample transfer history data
    const transferHistory = [
        { transferId: "10202020", receivedFund: 3000, refNum: "REF12345", date: "01/09/2025" },
        { transferId: "10202021", receivedFund: 2500, refNum: "REF12346", date: "15/08/2025" },
        { transferId: "10202022", receivedFund: 2000, refNum: "REF12347", date: "05/08/2025" },
    ];

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-[800px] h-[600px] p-8 relative opacity-100 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        {benefit.programName} Transfer History
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="text-gray-700 border-b border-gray-300 bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-sm font-semibold">Transfer ID</th>
                                <th className="px-4 py-3 text-sm font-semibold">Received Fund</th>
                                <th className="px-4 py-3 text-sm font-semibold">Ref Num</th>
                                <th className="px-4 py-3 text-sm font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {transferHistory.map((transfer, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-900">
                                        {transfer.transferId}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">
                                        ${transfer.receivedFund.toLocaleString()}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900">
                                        {transfer.refNum}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900">
                                        {transfer.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex justify-start gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 bg-[#D9D9D9] text-black rounded-md cursor-pointer"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransferHistory;
