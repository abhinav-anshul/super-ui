import { MainPane } from "@/components/MainPane"
import { Sidepane } from "@/components/Sidepane"

function ComponentName({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    return (
        <>
            <main className="md:px-8">
                <section className="mx-auto max-w-screen-8xl">
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="hidden md:block md:col-span-1">
                            <Sidepane params={params} align="left" />
                        </div>
                        <div className="bg-gray-300 col-span-full md:col-span-3">
                            <MainPane params={params} />
                        </div>
                        <div className="hidden md:block bg-gray-400 md:col-span-1">
                            <Sidepane params={params} align="right" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ComponentName