import Link from 'next/link';

export default function PredictionsPage() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">Match Predictions</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Expert Predictions</h2>
          <p className="text-gray-500 mb-4">
            Our experts analyze each match to provide you with the most accurate predictions for the FIFA World Cup 2026.
          </p>
          <div className="space-y-4">
            {/* Placeholder for predictions */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="bg-primary-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">1</span>
              </div>
              <div>
                <h3 className="font-medium">Argentina vs France</h3>
                <p className="text-sm text-gray-500 mb-1">Final - July 19, 2026</p>
                <p className="font-medium text-primary-green">Argentina 2 - 1 France</p>
                <p className="text-xs text-gray-400">Confidence: 75%</p>
              </div>
            </div>
            
            {/* More predictions would go here */}
          </div>
          
          <div className="text-center mt-6">
            <Link href="/predictions" className="text-primary-green hover:text-primary-gold font-medium">
              View All Predictions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}