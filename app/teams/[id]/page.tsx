import Image from 'next/image';
import { fetchAPI, worldCupEndpoints } from '@/lib/api';
import type { Team } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await fetchAPI<Team>(`/teams?id=${id}`);

  if (data.results === 0) notFound();

  const team = data.response[0];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-6 mb-8">
            <Image
              src={team.team.logo}
              alt={team.team.name}
              width={120}
              height={120}
            />
            <div>
              <h1 className="text-3xl font-bold text-primary-green">{team.team.name}</h1>
              <p className="text-gray-500">{team.team.country}</p>
              <p className="text-sm text-gray-400">Code: {team.team.code}</p>
            </div>
          </div>
          {team.venue.name && (
            <div className="border-t pt-6">
              <h2 className="text-xl font-bold mb-4">Venue</h2>
              <p className="text-gray-600">{team.venue.name}</p>
              <p className="text-gray-500">{team.venue.city}, {team.venue.address}</p>
              <p className="text-gray-500">Capacity: {team.venue.capacity.toLocaleString()}</p>
              <p className="text-gray-500">Surface: {team.venue.surface}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
