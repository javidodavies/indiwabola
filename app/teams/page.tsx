import Link from 'next/link';
import Image from 'next/image';
import { fetchAPI } from '@/lib/api';
import { worldCupEndpoints } from '@/lib/api';
import type { Team } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

export default async function TeamsPage() {
  const data = await fetchAPI<Team>(worldCupEndpoints.teams);
  
  if (data.results === 0) {
    notFound();
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">Participating Teams</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.response.map((team: Team) => (
            <Link
              key={team.team.id}
              href={`/teams/${team.team.id}`}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <Image
                src={team.team.logo}
                alt={team.team.name}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="font-medium text-center">{team.team.name}</h3>
              <p className="text-sm text-gray-500 text-center">{team.team.country}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}