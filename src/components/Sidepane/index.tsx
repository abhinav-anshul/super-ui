import { Fragment } from 'react'
import sidepane from './sidepane.module.css'
import Link from 'next/link'
import { clsx } from 'clsx';

const content = [
    {
        heading: "Getting Started",
        content: [
            { title: "Introduction", link: "/introduction" },
            { title: "Installation", link: "/installation" },
        ]
    }
]

const componentContent = [
    {
        heading: "Components",
        content: [
            { title: "Header", link: "/header" },
            { title: "Slab", link: "/slab" },
        ]
    }
]

interface IProps {
    params: { slug: string },
    align: "right" | "left"
}

function Sidepane({ params, align }: IProps) {

    console.log({ params })

    return (
        <>
            <section className="min-h-screen sticky top-0">
                <div className={`h-screen overflow-y-scroll ${sidepane['right-pane-container']}`}>
                    {/* // left side */}
                    {align === "left" && (
                        <div className='py-6 space-y-4'>
                            {content?.map((itm, index) => (
                                <Fragment key={index}>
                                    <div className='px-4'>
                                        <div className=' text-gray-900 font-[600]'>{itm?.heading}</div>
                                        {itm?.content?.map((itm, index) => (
                                            <Fragment key={index}>
                                                <div className='px-4'>
                                                    <Link href={`/components${itm?.link}`}>
                                                        <div className={`${(params?.slug?.toLowerCase() === itm?.title.toLowerCase()) ? "text-gray-950 font-[500]" : "text-gray-500"} hover:text-gray-800 font-[300]`}>{itm?.title}</div>
                                                    </Link>
                                                </div>
                                            </Fragment>
                                        ))}
                                    </div>
                                </Fragment>
                            ))}
                            {componentContent?.map((itm, index) => (
                                <Fragment key={index}>
                                    <div className='px-4'>
                                        <div className=' text-gray-900 font-[600]'>{itm?.heading}</div>
                                        {itm?.content?.map((itm, index) => (
                                            <Fragment key={index}>
                                                <div className='px-4'>
                                                    <Link href={`/components${itm?.link}`}>
                                                        <div className={`${(params?.slug?.toLowerCase() === itm?.title.toLowerCase()) ? "text-gray-950 font-[500]" : "text-gray-500"} hover:text-gray-800 font-[300]`}>{itm?.title}</div>
                                                    </Link>
                                                </div>
                                            </Fragment>
                                        ))}
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    )}
                    {/* // right side */}
                    {align === "right" && (
                        <div>gfdsdfgfddfd</div>
                    )}
                </div>
            </section>
        </>
    )
}

export { Sidepane }