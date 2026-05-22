import { APIFootballResponse } from '@/lib/types';

const API_KEY = process.env.API_FOOTBALL_KEY;
const API_HOST = process.env.API_FOOTBALL_HOST;
const BASE_URL = `https://${API_HOST}`;

const headers = {
  'x-rapidapi-key': API_KEY,
  'x-rapidapi-host': API_HOST,
};

export async function fetchAPI<T>(endpoint: string): Promise<APIFootballResponse<T>> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers,
      // Cache for 1 hour for most endpoints, adjust as needed
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`API-Football error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching from API-Football:', error);
    // Return empty response structure
    return {
      get: '',
      parameters: {},
      errors: [],
      results: 0,
      paging: { current: 1, total: 1 },
      response: [] as T[],
    };
  }
}

// World Cup 2026 specific endpoints
export const worldCupEndpoints = {
  fixtures: '/fixtures?league=1&season=2026',
  liveScores: '/fixtures?live=all&league=1&season=2026',
  standings: '/standings?league=1&season=2026',
  teams: '/teams?league=1&season=2026',
  players: '/players?league=1&season=2026',
  topScorers: '/players/topscorers?league=1&season=2026',
  venues: '/venues?league=1&season=2026',
};