import Link from 'next/link';
import Image from 'next/image';
import { fetchAPI } from '@/lib/api';
import { worldCupEndpoints } from '@/lib/api';
import type { Player } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

export default async function TopScorersPage() {
  const data = await fetchAPI<Player>(worldCupEndpoints.topScorers);
  
  if (data.results === 0) {
    notFound();
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">Top Scorers</h1>
        <div className="space-y-4">
          {data.response.map((player: Player) => (
            <Link
              key={player.player.id}
              href={`/players/${player.player.id}`}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex"
            >
              <Image
                src={player.player.photo}
                alt={player.player.name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-medium">{player.player.name}</h3>
                <p className="text-sm text-gray-500">
                  {player.statistics[0]?.team.name} • 
                  {player.statistics[0]?.goals.total} Goals
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}