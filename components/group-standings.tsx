import Link from 'next/link';

export default function GroupStandings() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-green">Group Standings</h2>
        <div className="space-y-4">
          {/* Placeholder for group standings */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-medium mb-2">Group A</h3>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-2">Pos</th>
                  <th scope="col" className="px-4 py-2">Team</th>
                  <th scope="col" className="px-4 py-2">P</th>
                  <th scope="col" className="px-4 py-2">Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2 flex items-center space-x-2">
                    <img src="/placeholder-team.png" alt="Team" className="w-8 h-8 rounded-full" />
                    <span>Argentina</span>
                  </td>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2 font-bold text-primary-green">9</td>
                </tr>
                {/* More rows would go here */}
              </tbody>
            </table>
          </div>
          
          {/* More groups would go here */}
          
          <div className="text-center mt-6">
            <Link href="/standings" className="text-primary-green hover:text-primary-gold font-medium">
              View Full Standings →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}