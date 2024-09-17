'use client'
import { Command } from 'cmdk';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function Header() {
  const [open, setOpen] = useState<boolean>(true)
  useEffect(() => {
    const down = (e: any) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])
  return (
    <>
      <section className='hidden md:block'>
        <nav className="sticky top-0 z-50 bg-white">
          <div className="max-w-screen-8xl px-6 mx-auto py-3 text-center">
            <div className="flex items-center justify-between">
              <div className="flex space-x-8 ">
                <Link href='/'><div className='text-gray-500 hover:text-gray-950'>Home</div></Link>
                <Link href='/components/button'><div className='text-gray-500 hover:text-gray-950'>Components</div></Link>
                <Link href="/newsletter"><div className='text-gray-500 hover:text-gray-950'>React Newsletter</div></Link>
                <Link href="/pricing"><div className='text-gray-500 hover:text-gray-950'>Pricing</div></Link>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <Link target='_blank' href="https://x.com/literallyanshul">
                  <Image className='cursor-pointer' alt="twitter logo" height={18} width={18} src="/twitter.png"/>
                  </Link>
                </div>
                <button className='bg-gray-800 hover:bg-gray-950 text-white rounded-md py-2 px-6 font-[300] cursor-pointer'>
                  <Link href="/book-a-call">Book a call</Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export { Header }
