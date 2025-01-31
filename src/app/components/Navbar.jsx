"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  if(!pathname.includes('dashboard')){
    return (
      <nav className='p-6'>
        <ul className="flex gap-5 justify-center items-center">
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href={'/posts'}>
            <li>Posts</li>
          </Link>
          <Link href={'/meals'}>
            <li>Meals</li>
          </Link>
        </ul>
      </nav>
    );
  }
  else{
    return(<></>);
  }
};

export default Navbar;