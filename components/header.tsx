'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-primary-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold whitespace-nowrap">
                Indiwabola World Cup Hub 2026
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`${pathname === '/' ? 'border-b-2 border-primary-gold' : 'text-white hover:text-primary-gold transition-colors'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/live-scores"
                className={`${pathname === '/live-scores' ? 'border-b-2 border-primary-gold' : 'text-white hover:text-primary-gold transition-colors'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Live Scores
              </Link>
              <Link
                href="/fixtures"
                className={`${pathname === '/fixtures' ? 'border-b-2 border-primary-gold' : 'text-white hover:text-primary-gold transition-colors'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Fixtures
              </Link>
              <Link
                href="/results"
                className={`${pathname === '/results' ? 'border-b-2 border-primary-gold' : 'text-white hover:text-primary-gold transition-colors'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Results
              </Link>
              <Link
                href="/standings"
                className={`${pathname === '/standings' ? 'border-b-2 border-primary-gold' : 'text-white hover:text-primary-gold transition-colors'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Standings
              </Link>
              <Link
                href="/teams"
                className={`${pathname === '/teams' ? 'border-b-2 border-primary-gold' : 'text-white hover:text-primary-gold transition-colors'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Teams
              </Link>
              <Link
                href="/players"
                className={`${pathname === '/players' ? 'border-b-2 border-primary-gold' : 'text-white hover:text-primary-gold transition-colors'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Players
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}