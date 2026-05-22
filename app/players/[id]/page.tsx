import Image from 'next/image';
import { fetchAPI, worldCupEndpoints } from '@/lib/api';
import type { Player } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export default async function PlayerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await fetchAPI<Player>(`/players?id=${id}`);

  if (data.results === 0) notFound();

  const player = data.response[0];
  const stats = player.statistics[0];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-6 mb-8">
            <Image
              src={player.player.photo}
              alt={player.player.name}
              width={120}
              height={120}
              className="rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold text-primary-green">{player.player.name}</h1>
              <p className="text-gray-500">{player.player.nationality}</p>
              <p className="text-sm text-gray-400">{stats?.team.name} • {stats?.games.position}</p>
            </div>
          </div>
          {stats && (
            <div className="border-t pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary-green">{stats.games.appearences ?? 0}</p>
                <p className="text-sm text-gray-500">Appearances</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary-green">{stats.goals.total ?? 0}</p>
                <p className="text-sm text-gray-500">Goals</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary-green">{stats.goals.assists ?? 0}</p>
                <p className="text-sm text-gray-500">Assists</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary-green">{stats.games.minutes ?? 0}</p>
                <p className="text-sm text-gray-500">Minutes</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
