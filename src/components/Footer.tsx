export default function Footer() {
    return (
      <footer className="bg-neutral-800 text-neutral-300 py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left side - social icons */}
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
            <a href="#" aria-label="Twitter" className="hover:text-white">🐦</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
          </div>
  
          {/* Right side - links & copyright */}
          <div className="text-sm text-center sm:text-right space-y-2 sm:space-y-0 sm:space-x-6">
            <span className="block sm:inline">Privacy Policy</span>
            <span className="block sm:inline">Terms</span>
            <span className="block sm:inline">Pricing</span>
            <span className="block sm:inline">Do not sell or share my personal info</span>
            <p className="text-xs mt-2 sm:mt-0">
              © 2025 Deli Dash Inc.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  