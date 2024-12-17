import React, { ReactNode } from "react"
import Providers from "./providers";
import { Metadata } from "next";

import PoweredByLogo from "@/modules/ui/PoweredByLogo";

import "@/styles/globals.css";


export const metadata: Metadata = {
    title: {
        default: "Andromeda Nextjs Starter",
        template: "%s | App Name"
    },
}

interface Props {
    children?: ReactNode;
}

const RootLayout = async (props: Props) => {
    const { children } = props;

    return (
        <html lang="en">
            <body className="dark">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
