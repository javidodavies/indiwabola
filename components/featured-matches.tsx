import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedMatches() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-green">Featured Live Matches</h2>
        <div className="space-y-4">
          {/* Placeholder for live matches - will be populated from API */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder-team.png"
                  alt="Team A"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">Team A</h3>
                  <p className="text-sm text-gray-500">Group A</p>
                </div>
              </div>
              <div className="text-primary-green font-bold">2 - 1</div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-medium">Team B</h3>
                  <p className="text-sm text-gray-500">Group B</p>
                </div>
                <Image
                  src="/placeholder-team.png"
                  alt="Team B"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <span>90' + 3'</span>
              <span>Stadium Name</span>
            </div>
          </div>
          
          {/* More matches would go here */}
          
          <div className="text-center mt-6">
            <Link href="/live-scores" className="text-primary-green hover:text-primary-gold font-medium">
              View All Live Matches →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}