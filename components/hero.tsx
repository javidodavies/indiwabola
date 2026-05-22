import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // Calculate days until opening match (June 11, 2026)
  const openingMatch = new Date('2026-06-11T00:00:00Z');
  const today = new Date();
  const timeDiff = openingMatch.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <section className="bg-primary-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Your Ultimate FIFA World Cup 2026 Destination
        </h1>
        <p className="text-xl mb-8">
          The world's biggest football tournament is coming. Stay updated with live scores, fixtures, news, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/live-scores"
            className="bg-primary-white text-primary-green px-6 py-3 rounded-lg font-medium hover:bg-primary-gold hover:text-white transition-colors flex-1 sm:flex-1"
          >
            Live Scores
          </Link>
          <Link
            href="/fixtures"
            className="bg-primary-white text-primary-green px-6 py-3 rounded-lg font-medium hover:bg-primary-gold hover:text-white transition-colors flex-1 sm:flex-1"
          >
            Fixtures
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{daysDiff}</p>
            <p className="text-sm">Days Until Kickoff</p>
          </div>
          <div>
            <p className="text-2xl font-bold">48</p>
            <p className="text-sm">Matches</p>
          </div>
          <div>
            <p className="text-2xl font-bold">16</p>
            <p className="text-sm">Groups</p>
          </div>
          <div>
            <p className="text-2xl font-bold">32</p>
            <p className="text-sm">Teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}