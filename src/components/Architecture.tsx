const steps = [
  { label: "Developer", icon: "👨‍💻", gradient: "from-indigo-500 to-purple-600" },
  { label: "GitHub", icon: "📦", gradient: "from-violet-500 to-purple-600" },
  { label: "GitHub Actions", icon: "⚡", gradient: "from-fuchsia-500 to-pink-600" },
  { label: "Docker Build", icon: "🐳", gradient: "from-sky-500 to-indigo-600" },
  { label: "VPS Deployment", icon: "☁️", gradient: "from-orange-500 to-amber-600" },
  { label: "Users", icon: "🌍", gradient: "from-emerald-500 to-teal-600" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-purple-950/10 to-[#0a0a0f]" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            How code flows from development to production.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center">
              {/* Node */}
              <div className="group relative">
                {/* Glow effect */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative flex items-center gap-4 px-8 py-5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm min-w-[240px] sm:min-w-[300px] transition-all duration-300 hover:border-slate-700 hover:bg-slate-900">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-lg font-semibold text-slate-100">{step.label}</span>
                </div>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="flex flex-col items-center py-3">
                  {/* Vertical line */}
                  <div className="w-px h-6 bg-gradient-to-b from-slate-600 to-slate-700" />
                  {/* Arrow head */}
                  <svg className="w-4 h-4 text-slate-500 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15l-5-5h10l-5 5z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
