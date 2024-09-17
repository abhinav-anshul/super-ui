'use client'
import { GeistMono } from 'geist/font/mono';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Metadata } from 'next'


const metadata: Metadata = {
    twitter: {
        card: 'summary_large_image',
        title: 'React Newsletter',
        description: 'Top 3 React Articles delivered to your inbox every week!',
        creator: '@anshul',
        images: ['https://ibb.co/MfhgRZw'],
    },
}

function Newsletter() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [responseCode, setResponseCode] = useState(null);

    // Email validation function
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {
        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setErrorMessage(""); // Clear any previous error message

        const { data, error, status } = await supabase
            .from('Emails')
            .insert([{ email }]);
        setResponseCode(status);

        if (error) {
            console.error(error);
            setErrorMessage("There was an issue submitting your email. Please try again.");
        } else {
            console.log(data);
            setEmail("");
        }
    };

    return (
        <>
            <section className="flex flex-col justify-center min-h-[80vh] max-w-screen-8xl mx-auto space-y-4">
                <div className="leading-tight text-3xl px-4">
                    <div className="text-center">Top 3 React Articles</div>
                    <div className="text-center">mailed to your inbox every week!</div>
                </div>
                <div className="mx-auto border border-gray-400 rounded-md py-1 px-2 text-xl">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="border-none outline-none w-[280px] text-[14px] placeholder:text-[1rem]"
                        placeholder="Enter your email"
                    />
                </div>
                {errorMessage && (
                    <div className="text-center text-red-500 text-sm">{errorMessage}</div>
                )}
                {responseCode === 201 && (
                    <div className="text-center text-green-600 text-sm">Awesome! We'll start sending you emails.</div>
                )}
                <div className="mx-auto text-xl">
                    <button
                        onClick={handleSubmit}
                        className={`bg-gray-700 text-white hover:bg-gray-950 px-3 py-1 rounded-md ${GeistMono.className}`}
                    >
                        Subscribe
                    </button>
                </div>
                <div className="leading-tight">
                    <div className="italic text-center text-gray-400">No spams!</div>
                    <div className="italic text-center text-gray-400">Just straight up Weekly React newsletter delivered fresh to your email</div>
                </div>
            </section>
        </>
    )
}

export default Newsletter;
