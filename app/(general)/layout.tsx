import { NavBar } from "@/Components";
import {HomeIcon} from '@primer/octicons-react'

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>

            <main className="flex flex-col items-center p-24">
                <span className="text-7xl">Hola Mundo </span>

                {children}
            </main>


        </>

    );
}
