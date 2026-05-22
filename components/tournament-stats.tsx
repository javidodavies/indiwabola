export default function TournamentStats() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-green">Tournament Statistics</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-green">48</h3>
              <p className="text-sm text-gray-500">Total Matches</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-green">16</h3>
              <p className="text-sm text-gray-500">Groups</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-green">32</h3>
              <p className="text-sm text-gray-500">Teams</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-green">11</h3>
              <p className="text-sm text-gray-500">Venues</p>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold mb-4">Top Performing Teams</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Brazil</span>
                <span>8 Wins</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Argentina</span>
                <span>7 Wins</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>France</span>
                <span>6 Wins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}