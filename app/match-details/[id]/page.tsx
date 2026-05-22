import { notFound } from 'next/navigation';
import { fetchAPI } from '@/lib/api';
import type { Fixture } from '@/lib/types';
import MatchEvents from '@/components/match-events';
import Lineups from '@/components/lineups';
import MatchStats from '@/components/match-stats';

export const revalidate = 60; // Revalidate every minute for live data

export default async function MatchDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const matchId = params.id;
  
  // Fetch match details
  const data = await fetchAPI<Fixture>(`/fixtures?id=${matchId}`);
  
  if (data.results === 0 || !data.response[0]) {
    notFound();
  }

  const fixture = data.response[0];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={fixture.teams.home.logo}
                alt={fixture.teams.home.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">{fixture.teams.home.name}</h2>
                <p className="text-sm text-gray-500">{fixture.league.name} - {fixture.league.round}</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-x-2">
              {fixture.score.fulltime.home !== null && fixture.score.fulltime.away !== null ? (
                <>
                  <span className="text-4xl font-bold">{fixture.score.fulltime.home}</span>
                  <span className="text-primary-green"> - </span>
                  <span className="text-4xl font-bold">{fixture.score.fulltime.away}</span>
                </>
              ) : (
                <span className="text-primary-green font-bold text-2xl">{fixture.status.long}</span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h2 className="text-2xl font-bold">{fixture.teams.away.name}</h2>
                <p className="text-sm text-gray-500">{fixture.league.name} - {fixture.league.round}</p>
              </div>
              <img
                src={fixture.teams.away.logo}
                alt={fixture.teams.away.name}
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>{new Date(fixture.fixture.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>{new Date(fixture.fixture.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            <span>{fixture.fixture.venue.name}</span>
            <span>{fixture.fixture.venue.city}</span>
          </div>
        </div>

        {/* Tabs for different sections */}
        <div className="space-y-6">
          <MatchEvents fixtureId={matchId} />
          <Lineups fixtureId={matchId} />
          <MatchStats fixtureId={matchId} />
        </div>
      </div>
    </section>
  );
}