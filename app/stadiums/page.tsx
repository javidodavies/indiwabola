import Link from 'next/link';
import Image from 'next/image';
import { fetchAPI } from '@/lib/api';
import { worldCupEndpoints } from '@/lib/api';
import type { Venue } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

export default async function StadiumsPage() {
  const data = await fetchAPI<Venue>(worldCupEndpoints.venues);
  
  if (data.results === 0) {
    notFound();
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">FIFA World Cup 2026 Stadiums</h1>
        <div className="space-y-4">
          {data.response.map((venue: Venue) => (
            <Link
              key={venue.id}
              href={`/stadiums/${venue.id}`}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  width={120}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">{venue.name}</h3>
                  <p className="text-sm text-gray-500">{venue.city}</p>
                  <p className="text-sm text-gray-500 mt-1">Capacity: {venue.capacity.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Surface: {venue.surface}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}