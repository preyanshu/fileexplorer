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

// {
//     "name": "~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr",
//     "address": "test",
//     "parent_address": "test",
//     "symlink": null,
//     "children": {[
//         {
//             "key": "adnrjs_beta_test",
//             "value": {
//                 "name": "adnrjs_beta_test",
//                 "address": "andr10d7ghxsje8z7xd82tnjp5fz4wn2q7jw3jz0dxcev86mraykuu77sl92m96",
//                 "parent_address": "andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr",
//                 "symlink": null,
//                 "parent": {
//                     "name": "~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr",
//                     "address": "test",
//                     "parent_address": "test",
//                     "symlink": null,
//                     "children": {}
//                 },
//                 "children": {}
//             }
//         },
//         {
//             "key": "adnrjs_update_test",
//             "value": {
//                 "name": "adnrjs_update_test",
//                 "address": "andr1889xgvwk8phc6l87w7d5cjrhjdx295etrqf58q7r4qwkwpaac7yqvnjfnv",
//                 "parent_address": "andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr",
//                 "symlink": null,
//                 "parent": {
//                     "name": "~andr12xxey4enkcfgv522cxl03xmk7tdpmy6k5m5zhr",
//                     "address": "test",
//                     "parent_address": "test",
//                     "symlink": null,
//                     "children": {}
//                 }
//             }
//         }
//     ]}
// }