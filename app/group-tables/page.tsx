import { fetchAPI } from '@/lib/api';
import { worldCupEndpoints } from '@/lib/api';
import type { Standing } from '@/lib/types';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

export default async function GroupTablesPage() {
  const data = await fetchAPI<Standing>(worldCupEndpoints.standings);
  
  if (data.results === 0) {
    notFound();
  }

  // Group standings by group
  const groupedStandings: Record<string, Standing[]> = {};
  data.response.forEach((standing: Standing) => {
    const group = standing.group;
    if (!groupedStandings[group]) {
      groupedStandings[group] = [];
    }
    groupedStandings[group].push(standing);
  });

  // Sort groups alphabetically
  const sortedGroups = Object.keys(groupedStandings).sort();

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-green">FIFA World Cup 2026 Group Tables</h1>
        <div className="space-y-8">
          {sortedGroups.map((group) => (
            <div key={group} className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-green">Group {group}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2">Pos</th>
                      <th scope="col" className="px-4 py-2">Team</th>
                      <th scope="col" className="px-4 py-2">P</th>
                      <th scope="col" className="px-4 py-2">W</th>
                      <th scope="col" className="px-4 py-2">D</th>
                      <th scope="col" className="px-4 py-2">L</th>
                      <th scope="col" className="px-4 py-2">GF</th>
                      <th scope="col" className="px-4 py-2">GA</th>
                      <th scope="col" className="px-4 py-2">GD</th>
                      <th scope="col" className="px-4 py-2">Pts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {groupedStandings[group]
                      .sort((a, b) => a.rank - b.rank)
                      .map((standing: Standing) => (
                        <tr key={standing.team.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-center font-medium">{standing.rank}</td>
                          <td className="px-4 py-2 flex items-center space-x-3">
                            <img
                              src={standing.team.logo}
                              alt={standing.team.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <span className="font-medium">{standing.team.name}</span>
                          </td>
                          <td className="px-4 py-2 text-center">{standing.all.played}</td>
                          <td className="px-4 py-2 text-center">{standing.all.win}</td>
                          <td className="px-4 py-2 text-center">{standing.all.draw}</td>
                          <td className="px-4 py-2 text-center">{standing.all.lose}</td>
                          <td className="px-4 py-2 text-center">{standing.all.goals.for}</td>
                          <td className="px-4 py-2 text-center">{standing.all.goals.against}</td>
                          <td className="px-4 py-2 text-center font-medium">{standing.goalsDiff}</td>
                          <td className="px-4 py-2 text-center font-medium text-primary-green">{standing.points}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}