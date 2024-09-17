'use client'
import React from "react";
import  Script  from "next/script";
import Head from "next/head";

interface IProps {
    url: string;
}

const CalendlyEmbed = ({ url }: IProps) => {
    return (
        <>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="https://assets.calendly.com/assets/external/widget.css" 
                />
            </Head>

            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload" // Loads the script only when needed
            />

            <div
                className="calendly-inline-widget"
                data-url={url}
                style={{ height: "100vh", width: "100%" }}
            ></div>
        </>
    );
};

export { CalendlyEmbed };
