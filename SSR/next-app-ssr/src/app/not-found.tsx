import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-4">
        {/* 404 Icon */}
        <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mb-8 shadow-lg">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m6 5a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        {/* Error Content */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go to Homepage
          </Link>
          
          <Link 
            href="/blog"
            className="inline-block w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Browse Blog Posts
          </Link>
        </div>
        
        {/* Help Text */}
        <p className="text-sm text-gray-500 mt-8">
          Need help? <Link href="/#contact" className="text-primary-600 hover:text-primary-700 underline">Contact us</Link>
        </p>
      </div>
    </div>
  );
}
