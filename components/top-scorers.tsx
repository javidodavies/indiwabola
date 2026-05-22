import Link from 'next/link';

export default function TopScorers() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-green">Top Scorers</h2>
        <div className="space-y-4">
          {/* Placeholder for top scorers */}
          <div className="bg-white rounded-lg shadow-md p-4 flex">
            <div className="flex-shrink-0">
              <span className="bg-primary-green text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium">1</span>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center space-x-3">
                <img
                  src="/placeholder-player.png"
                  alt="Player"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">Lionel Messi</h3>
                  <p className="text-sm text-gray-500">Argentina</p>
                </div>
              </div>
              <p className="mt-1 font-bold text-primary-green">5 Goals</p>
            </div>
          </div>
          
          {/* More scorers would go here */}
          
          <div className="text-center mt-6">
            <Link href="/top-scorers" className="text-primary-green hover:text-primary-gold font-medium">
              View All Top Scorers →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}