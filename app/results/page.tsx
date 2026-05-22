import MatchCard from '@/components/match-card';
import { fetchAPI } from '@/lib/api';
import { worldCupEndpoints } from '@/lib/api';
import type { Fixture } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

export default async function ResultsPage() {
  // Fetch finished matches (status short: FT, AET, PEN, etc.)
  const data = await fetchAPI<Fixture>(`${worldCupEndpoints.fixtures}&status=FT`);
  
  if (data.results === 0) {
    notFound();
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">FIFA World Cup 2026 Results</h1>
        <div className="space-y-4">
          {data.response.map((fixture: Fixture) => (
            <MatchCard key={fixture.fixture.id} fixture={fixture} />
          ))}
        </div>
      </div>
    </section>
  );
}