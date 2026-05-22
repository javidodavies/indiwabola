import type { Fixture } from '@/lib/types';

interface LineupsProps {
  fixtureId: string;
}

export default function Lineups({ fixtureId }: LineupsProps) {
  // In a real app, we would fetch lineups for this fixture
  // For now, we'll show a placeholder
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary-green">Lineups</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center py-8">
          Loading lineups...
        </p>
        {/* Example of how lineups would be displayed */}
        {/* 
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Argentina Starting XI</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">France Starting XI</h3>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}