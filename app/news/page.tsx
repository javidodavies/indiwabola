import Link from 'next/link';

export default function NewsPage() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">World Cup News</h1>
        <div className="space-y-6">
          {/* Placeholder for news articles */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Latest World Cup Updates</h2>
            <div className="space-y-4">
              {/* News item */}
              <div className="flex items-start space-x-4">
                <img
                  src="/placeholder-news.svg"
                  alt="News thumbnail"
                  className="w-32 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div>
                  <h3 className="font-medium">World Cup 2026 Opening Match Announced</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    The tournament will kick off on June 11, 2026, with hosts USA facing Mexico at the iconic Azteca Stadium in Mexico City.
                  </p>
                  <span className="text-xs text-gray-400">June 10, 2026 • 2 hours ago</span>
                </div>
              </div>
              
              {/* More news items would go here from API */}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/news" className="text-primary-green hover:text-primary-gold font-medium">
              View All News →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}