"use client";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center gap-4">
                <LoginForm />
            </div>
        </div>
    );
}
