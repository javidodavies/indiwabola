export default function SocialFollow() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-green">Follow Us</h2>
        <p className="text-center mb-8 text-gray-600">
          Stay connected with us on social media for live updates, behind-the-scenes content, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="flex items-center space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-primary-green font-medium">Twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-4l-3 9L9 3h-3l6 9H4" />
            </svg>
            <span className="text-primary-green font-medium">Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-6 1 8-5 3 4a3 3 0 003-2l1-9a3 3 0 00-3-3Zm6-12a3 3 0 100 6 3 3 0 000-6zM17 6l3 4m0 0l-4 3m4-4H9a5 5 0 00-5 5v2h5a2 2 0 002-2 3 3 0 00-3-3H9a3 3 0 01-3-3h2a3 3 0 003 3v2a3 3 0 003 3z" />
            </svg>
            <span className="text-primary-green font-medium">Instagram</span>
          </a>
          <a href="#" className="flex items-center space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l.001.001M12 12l.001.001M16 12l.001.001M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-primary-green font-medium">YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}