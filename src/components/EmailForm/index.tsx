'use client'
import { useState } from "react"

function EmailForm() {
    const [email, setEmail] = useState("");
    return (
        <>
            <section>
                <input onChange={(e) => setEmail(e.target.value)} type="search" className="border-none outline-none w-[280px] text-[14px] placeholder:text-[1rem]" placeholder="Enter your email" />
            </section>
        </>
    )
}

export { EmailForm }