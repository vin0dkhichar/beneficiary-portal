"use client";

import "@/commons/globals.css";
import { GlobalContextProvider } from "@/context/global";

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <main className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center min-h-screen font-fontcustom">
                    <GlobalContextProvider>
                        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-gray-600 mb-8">
                                We could not find the page you are looking for.
                            </p>
                            <button
                                onClick={() => window.history.back()}
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
                            >
                                Go Back
                            </button>
                        </div>
                    </GlobalContextProvider>
                </main>
            </body>
        </html>
    );
}
