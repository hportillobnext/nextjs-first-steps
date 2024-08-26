'use client'
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'

import style  from './ActiveLink.module.css'


interface Props {
    path: string,
    name: String
}

const ActiveLink = ({ path, name }: Props) => {

    

    return (
        <>

            <Link className={ `${style.link} ${(usePathname()===path) && style[ 'active-link']}`}  key={path} href={path} >
                {name}
            </Link>
        </>
    )
}

export default ActiveLink
