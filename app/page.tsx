import Hero from '@/components/hero';
import FeaturedMatches from '@/components/featured-matches';
import TodaysFixtures from '@/components/todays-fixtures';
import LatestResults from '@/components/latest-results';
import GroupStandings from '@/components/group-standings';
import TopScorers from '@/components/top-scorers';
import TrendingNews from '@/components/trending-news';
import TournamentStats from '@/components/tournament-stats';
import NewsletterSignup from '@/components/newsletter-signup';
import AdBanner from '@/components/ad-banner';
import SocialFollow from '@/components/social-follow';

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <AdBanner />
      <FeaturedMatches />
      <TodaysFixtures />
      <LatestResults />
      <GroupStandings />
      <TopScorers />
      <TrendingNews />
      <TournamentStats />
      <NewsletterSignup />
      <AdBanner />
      <SocialFollow />
    </main>
  );
}