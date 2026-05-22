'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      // In a real app, you would send this to your backend or email service
      // For now, we'll just simulate
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-primary-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Stay Updated</h2>
        <p className="text-center mb-6">Get the latest World Cup news, fixtures, and results delivered to your inbox.</p>
        {message && (
          <div className="mb-4 text-center p-3 rounded-lg">
            {message.includes('Thanks') ? (
              <div className="bg-primary-green/20 text-primary-green p-3 rounded-lg">{message}</div>
            ) : (
              <div className="bg-red-500/20 text-red-400 p-3 rounded-lg">{message}</div>
            )}
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-gold bg-primary-white/10 text-white"
            required
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-green hover:bg-primary-gold text-white font-medium py-3 px-6 rounded-lg transition-colors flex-1 sm:flex-none"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}