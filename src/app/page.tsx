import Image from "next/image"
import { MoveUpRight, Equal } from 'lucide-react';
import { GridPattern } from '@/components/GridPattern'
import { cn } from "@/components/GridPattern";
import Link from "next/link";
import { GeistMono } from 'geist/font/mono';

export default function Home() {
  return (
    <main className="md:px-8">
      <main className="flex flex-col justify-center min-h-[80vh] max-w-screen-8xl mx-auto bg-gradient-to-b from-gray-100 to-transparent md:rounded-2xl">
        <GridPattern
          width={35}
          height={35}
          x={15}
          y={15}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]",
          )}
        />
        <div className="leading-relaxed text-gray-900">
          {/* <div className="text-center text-6xl font-bold"><span className="title-text">UI Components</span> to </div>
          <div className="text-center text-6xl font-bold">supercharge your website</div> */}
          <h1 className="tracking-tighter font-semibold text-4xl lg:text-6xl text-left md:text-center px-8 md:px-0 max-w-[43rem] text-balance mx-auto"><span className="title-text">UI Components</span> to supercharge your website</h1>
        </div>
        <div className="text-left md:text-center px-8 md:px-0 text-gray-600 pt-2 text-base">
          Free, open-source, React + Tailwind components, a perfect for your website
        </div>

        {/* // desktop */}
        <div className={`hidden md:flex justify-center space-x-4 text-2xl ${GeistMono.className}`}>
          <Link href="/components/button">
            <div className="flex items-center hover:space-x-1 transition-all ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-gray-950">
              <div className="text-2xl m-4 mx-1 group relative w-max ">
                <span>Browse Components</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-gray-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-gray-600 group-hover:w-3/6"></span>
              </div>
              <div className="transition-all ease-in-out duration-300">
                <MoveUpRight size={20} />
              </div>
            </div>
          </Link>

          <Link href="/docs">
            <div className="flex items-center hover:space-x-1 transition-all ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-gray-950">
              <div className="text-2xl m-4 mx-1 group relative w-max ">
                <span>Getting Started</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-gray-900 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-gray-900 group-hover:w-3/6"></span>
              </div>
              <div className="transition-all ease-in-out duration-300"><MoveUpRight size={20} /></div>
            </div>
          </Link>
        </div>
        <div className="block md:hidden px-8 md:px-0 py-4 space-y-3">
          {/* // Browse Components */}
          <Link href="/components/installation">
            <div className="flex items-center hover:space-x-1 transition-all ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-gray-950">
              <div className="text-2xl group relative w-max ">
                <span>Browse Components</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-gray-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-gray-600 group-hover:w-3/6"></span>
              </div>
              <div className="transition-all ease-in-out duration-300">
                <MoveUpRight size={20} />
              </div>
            </div>
          </Link>
          {/* // Getting Started */}
          <Link href="/components/installation">
            <div className="flex items-center hover:space-x-1 transition-all ease-in-out duration-300 cursor-pointer text-gray-500 hover:text-gray-950">
              <div className="text-2xl group relative w-max ">
                <span>Getting Started</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-gray-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-gray-600 group-hover:w-3/6"></span>
              </div>
              <div className="transition-all ease-in-out duration-300">
                <MoveUpRight size={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center text-2xl title-text">
          coming soon!
        </div>
      </main>
    </main>
  )
}
