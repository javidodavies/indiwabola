import Link from 'next/link';
import Image from 'next/image';
import type { Fixture } from '@/lib/types';

interface MatchCardProps {
  fixture: Fixture;
}

export default function MatchCard({ fixture }: MatchCardProps) {
  const { home, away } = fixture.teams;
  const { home: homeGoals, away: awayGoals } = fixture.score.fulltime;
  const { long: status } = fixture.status;
  const { date } = fixture.fixture;

  // Format date and time
  const matchDate = new Date(date);
  const formattedDate = matchDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  const formattedTime = matchDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Link href={`/match-details/${fixture.fixture.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={home.logo}
              alt={home.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium">{home.name}</h3>
              <p className="text-sm text-gray-500">{fixture.league.round}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {homeGoals !== null && awayGoals !== null ? (
              <>
                <span className="text-2xl font-bold">{homeGoals}</span>
                <span className="text-primary-green"> - </span>
                <span className="text-2xl font-bold">{awayGoals}</span>
              </>
            ) : (
              <span className="text-primary-green font-bold">{status}</span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="font-medium">{away.name}</h3>
              <p className="text-sm text-gray-500">{fixture.league.round}</p>
            </div>
            <Image
              src={away.logo}
              alt={away.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
          <span>{fixture.fixture.venue.name}</span>
        </div>
      </div>
    </Link>
  );
}