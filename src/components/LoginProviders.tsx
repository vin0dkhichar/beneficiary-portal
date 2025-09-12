"use client";
import { useState, useEffect } from "react";
import { prefixBaseApiPath, prefixBasePath } from "@/utils/path";

type LoginProvider = {
    id: number;
    name: string;
    type: string;
    displayName: string | any;
    displayIconUrl: string;
};

export default function LoginProviders() {
    const loginProviders = [
        {
            id: 1,
            displayName: "LOGIN WITH NATIONAL ID",
        },
    ];
    // const [loginProviders, setLoginProviders] = useState<LoginProvider[]>([]);

    // useEffect(() => {
    //     fetch(prefixBaseApiPath(`/auth/getLoginProviders`))
    //         .then((res) => res.json())
    //         .then((resJson: { loginProviders: LoginProvider[] }) => {
    //             const providers = resJson.loginProviders.map((x) => {
    //                 if (typeof x.displayName !== "string") {
    //                     const displayNameLocale = Object.keys(x.displayName)[0];
    //                     x.displayName = x.displayName[displayNameLocale] || "";
    //                 }
    //                 return x;
    //             });
    //             setLoginProviders(providers);
    //         })
    //         .catch((err) => console.error("Failed to fetch login providers:", err));
    // }, []);

    return (
        <div className="mt-1 w-full">
            {loginProviders.map((x) => (
                <div key={x.id} className="mb-2">
                    <a
                        href={prefixBaseApiPath(
                            `/auth/getLoginProviderRedirect/${x.id}?redirect_uri=${prefixBasePath("/")}`
                        )}
                    >
                        <button className="w-full py-2 rounded-md text-lg bg-black text-white font-semibold hover:bg-gray-950 transition cursor-pointer">
                            {x.displayName}
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
}
