import { LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 font-raleway">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-white">
          <span className="flex items-center gap-1">
            Hireeasy
          </span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white hover:text-blue-400">Home</a>
        <a href="#" className="text-white hover:text-blue-400">About Us</a>
        <a href="#" className="text-white hover:text-blue-400">Opportunities</a>
        <a href="#" className="text-white hover:text-blue-400">Contact</a>
      </div>

      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        <LogIn className="h-5 w-5" />
        Login
      </button>
    </nav>
  );
};

export default Navbar;