import React from "react";
import Link from "next/link";
export default function Navbar({ location }) {
  const activeStyle = "underline";

  return (
    <nav className='shadow-sm sticky top-0 z-10  py-5 bg-white border-bottom border-gray-200 text-gray-500 text-lg font-bold '>
      <div className='flex justify-between px-12'>
        <div>
          <Link href='/'>
            <a className='no-underline text-black'>
              <h2 className='text-lg font-serif'>Øyvind Monsen</h2>
            </a>
          </Link>
        </div>
        <div className='space-x-5'>
          <Link href='/'>
            <a className='no-underline text-gray-600 '>Home</a>
          </Link>

          <Link href='/blog'>
            <a className='no-underline text-gray-600 '>Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
