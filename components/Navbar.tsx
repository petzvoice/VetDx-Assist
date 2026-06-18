export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          🩺 VetDx Assist
        </h1>

        <div className="flex gap-6 text-white">
          <a href="#" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400">
            Features
          </a>

          <a href="#" className="hover:text-cyan-400">
            About
          </a>

          <button className="rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-600">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}