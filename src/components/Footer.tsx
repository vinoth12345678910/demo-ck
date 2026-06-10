export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-slate-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Build to Scale
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Travel Club Hackathon Webinar
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center sm:text-right">
            <p className="text-sm text-slate-500">
              From Localhost to Production
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Built with Next.js & Docker
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Build to Scale Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
