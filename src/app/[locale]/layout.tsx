import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import "@/commons/globals.css";
import { GlobalContextProvider } from "@/context/global";
import { prefixBasePath } from "@/utils/path";

export const metadata: Metadata = {
    title: "Beneficiary Portal",
    description: "OpenG2P self-service portal for Beneficiaries",
    icons: {
        icon: prefixBasePath("/logo.png"),
    },
};

export const viewport = { width: "device-width", initialScale: 1 };

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "de" }];
}

export default async function RootLayout(props: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { children, params } = props;
    const { locale } = await params;

    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
            <body>
                <main className="bg-bgc font-fontcustom flex flex-col min-h-screen">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <GlobalContextProvider>{children}</GlobalContextProvider>
                    </NextIntlClientProvider>
                </main>
            </body>
        </html>
    );
}
