import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import ActiveLink from './active-link/ActiveLink'



const paths = [
  {path: '/about', name: 'About'},
  {path: '/pricing', name: 'Pricing'},
  {path: '/contact', name: 'Contact'},
]


const NavBar = () => {
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
          <Link href={'/'} className='flex items-center'>
          <HomeIcon />
            <span className='ml-2'>home</span>
          </Link>

            <div className='flex flex-1 justify-end'>

                {
                  paths.map((item) => (
                    <ActiveLink 
                    key={item.path} path={item.path} name={item.name} />
                  ))
                }

            

            </div>


        </nav>
    )
}

export default NavBar
