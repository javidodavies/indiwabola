import type { Fixture } from '@/lib/types';

interface MatchStatsProps {
  fixtureId: string;
}

export default function MatchStats({ fixtureId }: MatchStatsProps) {
  // In a real app, we would fetch statistics for this fixture
  // For now, we'll show a placeholder
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary-green">Match Statistics</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center py-8">
          Loading match statistics...
        </p>
        {/* Example of how stats would be displayed */}
        {/* 
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Argentina</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">France</h3>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}