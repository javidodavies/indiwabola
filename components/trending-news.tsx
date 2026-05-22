import Link from 'next/link';

export default function TrendingNews() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-green">Trending News</h2>
        <div className="space-y-4">
          {/* Placeholder for trending news */}
          <div className="bg-white rounded-lg shadow-md p-4 flex">
            <img
              src="/placeholder-news.svg"
              alt="News thumbnail"
              className="w-48 h-32 object-cover rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-medium">World Cup 2026 Opening Match Announced</h3>
              <p className="text-sm text-gray-500 mb-2">
                The tournament will kick off on June 11, 2026, with hosts USA facing Mexico.
              </p>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
          </div>
          
          {/* More news items would go here */}
          
          <div className="text-center mt-6">
            <Link href="/news" className="text-primary-green hover:text-primary-gold font-medium">
              View All News →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}