import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Column 1: Filters */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Filters</h3>
          <ul className="space-y-3 text-lg text-white/80">
            <li><Link href="/?category=All" className="hover:text-white">All</Link></li>
            <li><Link href="/?category=Electronics" className="hover:text-white">Electronics</Link></li>
            <li><Link href="/?category=Clothing" className="hover:text-white">Clothing</Link></li>
            <li><Link href="/?category=Home" className="hover:text-white">Home</Link></li>
          </ul>
        </div>

        {/* Column 2: About Us */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">About Us</h3>
          <ul className="space-y-3 text-lg text-white/80">
            <li><Link href="/" className="hover:text-white">About Us</Link></li>
            <li><Link href="/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10">
        <p className="text-lg text-white/60 font-medium">© 2024 American</p>
      </div>
    </footer>
  );
}
