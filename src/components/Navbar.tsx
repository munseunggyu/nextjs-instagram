"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import SearchIcon from './ui/icons/SearchIcon';
import NewIcon from './ui/icons/NewIcon';
import ColorBtn from './ui/ColorBtn';

export default function Navbar() {
  const pathName = usePathname()

  const menu = [
    {
      href: "/",
      icon: <HomeIcon isFill={pathName === '/' } />
    },
    {
      href: "/search",
      icon: <SearchIcon isFill={pathName === '/search' } />
    },

    {
      href: "/new",
      icon: <NewIcon isFill={pathName === '/new' } />
    },
  ]

  return (
    <div className='flex items-center px-6'>
      <h1 className='text-3xl font-bold'>
        Instagram
      </h1>
      <ul className='flex items-center gap-x-2 ml-auto p-4'>
        {
          menu.map((item, i) => (
            <li key={`${item.href}-${i}`}>
              <Link href={item.href} >
                {item.icon}
              </Link>
            </li>
          ))
        }
        <li>
          <ColorBtn text="Sign in" onClick={() => {}} />
        </li>
      </ul>
    </div>
  )
}
