export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl tracking-tighter">Dev<span className="text-blue-500">Profile</span></span>
            <p className="text-slate-500 text-sm mt-1">Building digital experiences, one line of code at a time.</p>
          </div>
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
