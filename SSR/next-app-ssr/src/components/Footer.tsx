import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary100 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DemoApp</h3>
            <p className="text-primary40">
              A modern web application demo built with the latest technologies.
            </p>
          </div>          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-primary40">
              <li><button type="button" className="hover:text-white transition-colors">Features</button></li>
              <li><button type="button" className="hover:text-white transition-colors">Pricing</button></li>
              <li><button type="button" className="hover:text-white transition-colors">Documentation</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary40">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><button type="button" className="hover:text-white transition-colors">Careers</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-primary40">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary80 mt-12 pt-8 text-center text-primary40">
          <p>&copy; 2025 DemoApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
