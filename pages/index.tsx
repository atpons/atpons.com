import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="flex space-x-3 mb-4 text-sm font-medium p-6">
        <div className="flex-auto flex space-x-3 w-9 h-9 justify-center">
          <Link href="https://github.com/atpons" passHref={true}>
            <button className="w-1/4 flex items-center justify-center rounded-md bg-black text-white">GitHub</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
