import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 py-6 flex items-center justify-between mb-8">
      <Link href="/">
        <a className="text-2xl font-bolt text-grey-800">atpons</a>
      </Link>
    </nav >
  )
}