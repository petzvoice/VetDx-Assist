export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              🩺 VetDx Assist
            </h2>

            <p className="mt-4">
              AI-powered veterinary clinical decision support designed for
              veterinarians and veterinary students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400">Features</a></li>
              <li><a href="#" className="hover:text-cyan-400">About</a></li>
              <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <p className="mt-4">
              support@vetdxassist.com
            </p>

            <p className="mt-2">
              Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center">
          © 2026 VetDx Assist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}