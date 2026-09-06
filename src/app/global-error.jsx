"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
    //eslint-disable-next-line no-console
    console.error(error);

    return (
        <html>
            <body>
                <Error />
            </body>
        </html>
    );
}
