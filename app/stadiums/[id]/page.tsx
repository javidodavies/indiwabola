import Image from 'next/image';
import { fetchAPI, worldCupEndpoints } from '@/lib/api';
import type { Venue } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export default async function StadiumDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await fetchAPI<Venue>(`/venues?id=${id}`);

  if (data.results === 0) notFound();

  const venue = data.response[0];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Image
            src={venue.image}
            alt={venue.name}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full mb-6"
          />
          <h1 className="text-3xl font-bold text-primary-green mb-2">{venue.name}</h1>
          <p className="text-gray-500 mb-4">{venue.city}, {venue.address}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Capacity</p>
              <p className="text-xl font-bold">{venue.capacity.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Surface</p>
              <p className="text-xl font-bold">{venue.surface}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
