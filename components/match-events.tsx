import type { Fixture } from '@/lib/types';

interface MatchEventsProps {
  fixtureId: string;
}

export default function MatchEvents({ fixtureId }: MatchEventsProps) {
  // In a real app, we would fetch events for this fixture
  // For now, we'll show a placeholder
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary-green">Match Events</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center py-8">
          Loading match events...
        </p>
        {/* Example of how events would be displayed */}
        {/* 
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="text-primary-green font-bold">15'</span>
            </div>
            <div>
              <h3 className="font-medium">GOAL!</h3>
              <p className="text-sm text-gray-500">Lionel Messi (Argentina)</p>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}