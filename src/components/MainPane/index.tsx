'use client'
import { PanelLeftOpen } from 'lucide-react';
import { useState } from 'react';

interface IProps {
    params: { slug: string }
}

function MainPane({ params }: IProps) {
    const [isOpen, setOpen] = useState<boolean>(false)

    // Function to toggle the pane's open state
    const togglePane = (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpen(prev => !prev);
    }

    // Function to close the pane
    const closePane = () => {
        setOpen(false);
    }

    return (
        <>
            <section onClick={closePane} className="relative h-screen">
                main pane
                <div onClick={togglePane} className="fixed top-4 left-4 cursor-pointer block md:hidden">
                    <PanelLeftOpen />
                </div>

                {/* Side Pane */}
                <div 
                    onClick={e => e.stopPropagation()}  // Stop propagation when clicking inside the pane
                    className={`h-full fixed top-0 left-0 overflow-x-hidden bg-red-400 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-3/4`}
                >
                    <div onClick={closePane} className="cursor-pointer p-4">
                        close
                    </div>
                </div>
            </section>
        </>
    )
}

export { MainPane }
