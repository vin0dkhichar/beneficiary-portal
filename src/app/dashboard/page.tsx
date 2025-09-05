// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const menuItems = [
//     { name: "Dashboard", icon: "📊" },
//     { name: "My Programs", icon: "📋" },
//     { name: "Total Benefits", icon: "💰" },
//     { name: "Bank Accounts", icon: "🏦" },
//     { name: "My Registries", icon: "📝" },
//     { name: "Applicable Schemes", icon: "📄" },
//     { name: "Notifications", icon: "🔔" },
//     { name: "Complaints", icon: "📢" },
// ];

// export default function Dashboard() {
//     const [expanded, setExpanded] = useState(false);
//     const [activeItem, setActiveItem] = useState(0);

//     return (
//         <div className="flex min-h-screen">
//             <div
//                 className={`bg-[#D9D9D9] border-r border-gray-100 fixed top-[70px] left-0 bottom-0 transition-all duration-300 ease-in-out ${expanded ? "w-[250px]" : "w-[60px]"
//                     } z-10 shadow-lg`}
//             >
//                 <div className="flex items-center justify-center h-16 border-b border-gray-200">
//                     {!expanded ? (
//                         <button
//                             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                             onClick={() => setExpanded(true)}
//                         >
//                             <Image
//                                 src="/bar.png"
//                                 alt="Menu"
//                                 width={24}
//                                 height={24}
//                                 priority
//                                 style={{ objectFit: "contain" }}
//                             />
//                         </button>
//                     ) : (
//                         <div className="flex items-center justify-between w-full px-4">
//                             <span className="font-semibold text-gray-800">Menu</span>
//                             <button
//                                 className="p-1 hover:bg-gray-100 rounded transition-colors"
//                                 onClick={() => setExpanded(false)}
//                             >
//                                 <Image
//                                     src="/x.png"
//                                     alt="Close"
//                                     width={20}
//                                     height={20}
//                                     priority
//                                     style={{ objectFit: "contain" }}
//                                 />
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 <div className="py-4">
//                     {menuItems.map((item, idx) => (
//                         <div
//                             key={idx}
//                             className={`flex items-center cursor-pointer transition-all duration-200 mx-2 my-3 rounded-lg ${activeItem === idx
//                                 ? "bg-blue-100 text-blue-700"
//                                 : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 }`}
//                             onClick={() => setActiveItem(idx)}
//                         >
//                             <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
//                                 <div className="bg-gray-400 rounded-full w-8 h-8"></div>
//                             </div>

//                             <span
//                                 className={`transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden ${expanded
//                                     ? "opacity-100 max-w-full ml-2"
//                                     : "opacity-0 max-w-0 ml-0"
//                                     }`}
//                             >
//                                 {item.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Main content */}
//             {/* <div
//                 className={`transition-all duration-300 ease-in-out flex-1 pt-[70px] ${expanded ? "ml-[250px]" : "ml-[60px]"
//                     }`}
//             >
//                 <div className="p-6 min-h-screen bg-gray-50">
//                     <div className="bg-white rounded-lg shadow-sm p-6">
//                         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//                             Welcome to Your Dashboard
//                         </h1>
//                         <p className="text-gray-600">
//                             Select an option from the sidebar to get started.
//                         </p>
//                     </div>
//                 </div>
//             </div> */}

//             <div
//                 className={`transition-all duration-300 ease-in-out flex-1 pt-[70px] ${expanded ? "ml-[250px]" : "ml-[60px]"
//                     }`}
//             >
//                 <div className="p-4 lg:p-8 min-h-screen bg-white">
//                     {/* First Row - Responsive Grid */}
//                     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
//                         {/* Dashboard - Spans 2 columns on xl screens */}
//                         <div className="xl:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                             <div className="flex items-center justify-between mb-6">
//                                 <h2 className="text-2xl font-bold text-gray-800">Benefits Overview</h2>
//                                 <div className="text-sm text-gray-500">Last updated: Today</div>
//                             </div>

//                             {/* Chart Area */}
//                             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-4">
//                                 <div className="flex items-center justify-between mb-4">
//                                     <div>
//                                         <h3 className="text-lg font-semibold text-gray-800">Monthly Benefits</h3>
//                                         <p className="text-3xl font-bold text-blue-600">₹45,200</p>
//                                     </div>
//                                     <div className="text-right">
//                                         <p className="text-sm text-gray-500">This month</p>
//                                         <p className="text-lg font-semibold text-green-600">+12%</p>
//                                     </div>
//                                 </div>

//                                 {/* Simple chart representation */}
//                                 <div className="flex items-end space-x-2 h-24">
//                                     {[40, 55, 35, 70, 45, 80, 65].map((height, idx) => (
//                                         <div
//                                             key={idx}
//                                             className="bg-blue-500 rounded-t-sm flex-1"
//                                             style={{ height: `${height}%` }}
//                                         ></div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Quick Stats */}
//                             <div className="grid grid-cols-3 gap-4">
//                                 <div className="text-center p-3 bg-green-50 rounded-lg">
//                                     <p className="text-2xl font-bold text-green-600">5</p>
//                                     <p className="text-sm text-gray-600">Active Programs</p>
//                                 </div>
//                                 <div className="text-center p-3 bg-yellow-50 rounded-lg">
//                                     <p className="text-2xl font-bold text-yellow-600">2</p>
//                                     <p className="text-sm text-gray-600">Pending Applications</p>
//                                 </div>
//                                 <div className="text-center p-3 bg-purple-50 rounded-lg">
//                                     <p className="text-2xl font-bold text-purple-600">₹1.2L</p>
//                                     <p className="text-sm text-gray-600">Total Received</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column - Stacked Cards */}
//                         <div className="space-y-6">
//                             {/* Total Benefits */}
//                             <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                                 <div className="flex items-center justify-between mb-4">
//                                     <h3 className="text-xl font-bold text-gray-800">Recent Benefits</h3>
//                                     <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Updated</span>
//                                 </div>
//                                 <div className="space-y-3">
//                                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                                         <span className="font-medium text-gray-700">PM-KISAN</span>
//                                         <span className="text-green-600 font-semibold">₹6,000</span>
//                                     </div>
//                                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                                         <span className="font-medium text-gray-700">Pension</span>
//                                         <span className="text-green-600 font-semibold">₹3,000</span>
//                                     </div>
//                                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                                         <span className="font-medium text-gray-700">LPG Subsidy</span>
//                                         <span className="text-green-600 font-semibold">₹200</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Bank Accounts */}
//                             <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                                 <h3 className="text-xl font-bold text-gray-800 mb-4">Linked Accounts</h3>
//                                 <div className="space-y-3">
//                                     <div className="flex items-center p-3 bg-blue-50 rounded-lg">
//                                         <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
//                                             <span className="text-white text-xs font-bold">SBI</span>
//                                         </div>
//                                         <div className="flex-1">
//                                             <p className="font-medium text-gray-800">State Bank of India</p>
//                                             <p className="text-sm text-gray-500">****1234</p>
//                                         </div>
//                                         <span className="text-green-600 text-xs">✓ Verified</span>
//                                     </div>
//                                     <div className="flex items-center p-3 bg-orange-50 rounded-lg">
//                                         <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
//                                             <span className="text-white text-xs font-bold">PNB</span>
//                                         </div>
//                                         <div className="flex-1">
//                                             <p className="font-medium text-gray-800">Punjab National Bank</p>
//                                             <p className="text-sm text-gray-500">****5678</p>
//                                         </div>
//                                         <span className="text-yellow-600 text-xs">⏳ Pending</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Second Row - Three Equal Columns */}
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                         <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                             <div className="flex items-center justify-between mb-4">
//                                 <h3 className="text-xl font-bold text-gray-800">My Programs</h3>
//                                 <span className="text-2xl">📋</span>
//                             </div>
//                             <div className="space-y-3">
//                                 <div className="p-3 border-l-4 border-green-500 bg-green-50">
//                                     <p className="font-semibold text-green-800">PM-KISAN Scheme</p>
//                                     <p className="text-sm text-green-600">Active • Next payment: Oct 2024</p>
//                                 </div>
//                                 <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
//                                     <p className="font-semibold text-blue-800">Pradhan Mantri Pension</p>
//                                     <p className="text-sm text-blue-600">Active • Monthly</p>
//                                 </div>
//                                 <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
//                                     <p className="font-semibold text-yellow-800">LPG Subsidy</p>
//                                     <p className="text-sm text-yellow-600">Pending verification</p>
//                                 </div>
//                             </div>
//                             <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
//                                 View All Programs →
//                             </button>
//                         </div>

//                         <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                             <div className="flex items-center justify-between mb-4">
//                                 <h3 className="text-xl font-bold text-gray-800">My Registries</h3>
//                                 <span className="text-2xl">📝</span>
//                             </div>
//                             <div className="space-y-4">
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="font-medium text-gray-800">Aadhaar</p>
//                                         <p className="text-sm text-gray-500">****-****-1234</p>
//                                     </div>
//                                     <span className="text-green-600 text-sm">✓</span>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="font-medium text-gray-800">PAN Card</p>
//                                         <p className="text-sm text-gray-500">ABCDE****F</p>
//                                     </div>
//                                     <span className="text-green-600 text-sm">✓</span>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="font-medium text-gray-800">Voter ID</p>
//                                         <p className="text-sm text-gray-500">ABC123****</p>
//                                     </div>
//                                     <span className="text-yellow-600 text-sm">⏳</span>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="font-medium text-gray-800">Land Records</p>
//                                         <p className="text-sm text-gray-500">Survey No: 123/A</p>
//                                     </div>
//                                     <span className="text-green-600 text-sm">✓</span>
//                                 </div>
//                             </div>
//                             <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
//                                 Manage Documents →
//                             </button>
//                         </div>

//                         <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                             <div className="flex items-center justify-between mb-4">
//                                 <h3 className="text-xl font-bold text-gray-800">Notifications</h3>
//                                 <span className="text-2xl">🔔</span>
//                             </div>
//                             <div className="space-y-3">
//                                 <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
//                                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
//                                     <div>
//                                         <p className="text-sm font-medium text-gray-800">Payment Received</p>
//                                         <p className="text-xs text-gray-600">PM-KISAN installment of ₹2,000 credited</p>
//                                         <p className="text-xs text-gray-400">2 hours ago</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
//                                     <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
//                                     <div>
//                                         <p className="text-sm font-medium text-gray-800">Document Required</p>
//                                         <p className="text-xs text-gray-600">Income certificate needed for LPG subsidy</p>
//                                         <p className="text-xs text-gray-400">1 day ago</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
//                                     <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                                     <div>
//                                         <p className="text-sm font-medium text-gray-800">Application Approved</p>
//                                         <p className="text-xs text-gray-600">Your pension application has been approved</p>
//                                         <p className="text-xs text-gray-400">3 days ago</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
//                                 View All Notifications →
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



"use client";

export default function Dashboard() {
    return (
        <div className="p-4 lg:p-8 min-h-screen bg-white">
            {/* First Row - Responsive Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                {/* Dashboard - Spans 2 columns on xl screens */}
                <div className="xl:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Benefits Overview</h2>
                        <div className="text-sm text-gray-500">Last updated: Today</div>
                    </div>

                    {/* Chart Area */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-4">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Monthly Benefits</h3>
                                <p className="text-3xl font-bold text-blue-600">₹45,200</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">This month</p>
                                <p className="text-lg font-semibold text-green-600">+12%</p>
                            </div>
                        </div>

                        {/* Simple chart representation */}
                        <div className="flex items-end space-x-2 h-24">
                            {[40, 55, 35, 70, 45, 80, 65].map((height, idx) => (
                                <div
                                    key={idx}
                                    className="bg-blue-500 rounded-t-sm flex-1"
                                    style={{ height: `${height}%` }}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                            <p className="text-2xl font-bold text-green-600">5</p>
                            <p className="text-sm text-gray-600">Active Programs</p>
                        </div>
                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                            <p className="text-2xl font-bold text-yellow-600">2</p>
                            <p className="text-sm text-gray-600">Pending Applications</p>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <p className="text-2xl font-bold text-purple-600">₹1.2L</p>
                            <p className="text-sm text-gray-600">Total Received</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Stacked Cards */}
                <div className="space-y-6">
                    {/* Total Benefits */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Recent Benefits</h3>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Updated</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">PM-KISAN</span>
                                <span className="text-green-600 font-semibold">₹6,000</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Pension</span>
                                <span className="text-green-600 font-semibold">₹3,000</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">LPG Subsidy</span>
                                <span className="text-green-600 font-semibold">₹200</span>
                            </div>
                        </div>
                    </div>

                    {/* Bank Accounts */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Linked Accounts</h3>
                        <div className="space-y-3">
                            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-xs font-bold">SBI</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">State Bank of India</p>
                                    <p className="text-sm text-gray-500">****1234</p>
                                </div>
                                <span className="text-green-600 text-xs">✓ Verified</span>
                            </div>
                            <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-xs font-bold">PNB</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">Punjab National Bank</p>
                                    <p className="text-sm text-gray-500">****5678</p>
                                </div>
                                <span className="text-yellow-600 text-xs">⏳ Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Row - Three Equal Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">My Programs</h3>
                        <span className="text-2xl">📋</span>
                    </div>
                    <div className="space-y-3">
                        <div className="p-3 border-l-4 border-green-500 bg-green-50">
                            <p className="font-semibold text-green-800">PM-KISAN Scheme</p>
                            <p className="text-sm text-green-600">Active • Next payment: Oct 2024</p>
                        </div>
                        <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                            <p className="font-semibold text-blue-800">Pradhan Mantri Pension</p>
                            <p className="text-sm text-blue-600">Active • Monthly</p>
                        </div>
                        <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                            <p className="font-semibold text-yellow-800">LPG Subsidy</p>
                            <p className="text-sm text-yellow-600">Pending verification</p>
                        </div>
                    </div>
                    <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View All Programs →
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">My Registries</h3>
                        <span className="text-2xl">📄</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-800">Aadhaar</p>
                                <p className="text-sm text-gray-500">****-****-1234</p>
                            </div>
                            <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-800">PAN Card</p>
                                <p className="text-sm text-gray-500">ABCDE****F</p>
                            </div>
                            <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-800">Voter ID</p>
                                <p className="text-sm text-gray-500">ABC123****</p>
                            </div>
                            <span className="text-yellow-600 text-sm">⏳</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-800">Land Records</p>
                                <p className="text-sm text-gray-500">Survey No: 123/A</p>
                            </div>
                            <span className="text-green-600 text-sm">✓</span>
                        </div>
                    </div>
                    <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Manage Documents →
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Notifications</h3>
                        <span className="text-2xl">🔔</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">Payment Received</p>
                                <p className="text-xs text-gray-600">PM-KISAN installment of ₹2,000 credited</p>
                                <p className="text-xs text-gray-400">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">Document Required</p>
                                <p className="text-xs text-gray-600">Income certificate needed for LPG subsidy</p>
                                <p className="text-xs text-gray-400">1 day ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">Application Approved</p>
                                <p className="text-xs text-gray-600">Your pension application has been approved</p>
                                <p className="text-xs text-gray-400">3 days ago</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View All Notifications →
                    </button>
                </div>
            </div>
        </div>
    );
}