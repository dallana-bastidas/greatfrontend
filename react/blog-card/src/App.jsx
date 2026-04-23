import "./App.css";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-[340px] bg-white rounded-2xl shadow-sm overflow-hidden">
        <img
          src="./img/spacejoy-YqFz7UMm8qE-unsplash.jpg"
          alt="Living room"
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-green-600 bg-green-50 border border-green-100 rounded-full">
            Interior
          </span>

          <h2 className="mt-4 text-xl font-bold text-gray-900 leading-tight">
            Top 5 Living Room Inspirations
          </h2>

          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>

          <button className="mt-6 flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900 transition-colors">
            Read more
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
