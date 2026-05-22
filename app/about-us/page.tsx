export default function AboutUsPage() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Indiwabola World Cup Hub 2026</h2>
          <p className="text-gray-600 mb-4">
            Indiwabola World Cup Hub 2026 is your ultimate destination for everything related to the FIFA World Cup 2026.
            We provide live scores, fixtures, results, standings, team and player information, news, and much more.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to bring football fans closer to the game they love by providing accurate, real-time information
            and engaging content throughout the tournament.
          </p>
          <p className="text-gray-600">
            Powered by API-Football and built with Next.js, TypeScript, and Tailwind CSS, our platform is designed to be
            fast, reliable, and accessible on any device.
          </p>
        </div>
      </div>
    </section>
  );
}