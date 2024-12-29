import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24">
      <div className="md:w-1/2 space-y-6">
        <p className="text-blue-400 font-medium">We are creative team.</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          The best way to promote business
        </h1>
        <p className="text-gray-400 text-lg max-w-lg">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Discover More
          </button>
          <button className="text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-navy-800 transition-colors">
            Explore Services
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>   
      <div className="md:w-1/2 mt-12 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute w-24 h-24 bg-blue-400 rounded-full blur-2xl opacity-20 -translate-x-20 translate-y-20"></div>
              <div className="absolute w-16 h-16 bg-blue-300 rounded-full blur-xl opacity-20 translate-x-32 -translate-y-16"></div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="w-full h-[400px] flex items-center justify-center">
              <div className="relative w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;