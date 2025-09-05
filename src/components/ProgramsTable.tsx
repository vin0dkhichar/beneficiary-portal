"use client";

interface Program {
    name: string;
    status: string;
    id: string;
    appliedDate: string;
}

const getStatusColor = (status: string) => {
    switch (status) {
        case "Enrolled":
            return "bg-green-100 text-green-800";
        case "Applied":
            return "bg-blue-100 text-blue-800";
        case "Confirmed":
            return "bg-purple-100 text-purple-800";
        case "Pending":
            return "bg-yellow-100 text-yellow-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};

export default function ProgramsTable({
    programs,
    compact = false,
}: {
    programs: Program[];
    compact?: boolean;
}) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wider">Program Name</th>
                        <th className="p-3 text-sm font-semibold tracking-wider">Application Status</th>
                        <th className="p-3 text-sm font-semibold tracking-wider">Application ID</th>
                        <th className="p-3 text-sm font-semibold tracking-wider">Applied Date</th>
                    </tr>
                </thead>
                <tbody>
                    {programs.map((program, idx) => (
                        <tr
                            key={idx}
                            className={`border-t hover:bg-gray-50 transition-colors duration-150 ${compact ? "text-sm" : ""
                                }`}
                        >
                            <td className="p-3">
                                <div className="font-medium text-gray-900">{program.name}</div>
                            </td>
                            <td className="p-3">
                                <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(program.status)}`}>
                                    {program.status}
                                </span>
                            </td>
                            <td className="p-3">
                                <div className="text-gray-900 font-mono">{program.id}</div>
                            </td>
                            <td className="p-3">
                                <div className="text-gray-500">{program.appliedDate}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}