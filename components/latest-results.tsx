import Link from 'next/link';

export default function LatestResults() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-green">Latest Results</h2>
        <div className="space-y-4">
          {/* Placeholder for latest results */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder-team.png"
                  alt="Team A"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">Brazil</h3>
                  <p className="text-sm text-gray-500">Group C</p>
                </div>
              </div>
              <div className="text-primary-green font-bold">3 - 0</div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-medium">Germany</h3>
                  <p className="text-sm text-gray-500">Group D</p>
                </div>
                <img
                  src="/placeholder-team.png"
                  alt="Team B"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <span>FT</span>
              <span>Stadium Name</span>
            </div>
          </div>
          
          {/* More results would go here */}
          
          <div className="text-center mt-6">
            <Link href="/results" className="text-primary-green hover:text-primary-gold font-medium">
              View All Results →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}