export default function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 animate-pulse transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 transition-transform duration-500 hover:scale-110 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative animate-fadeIn rounded-full px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Hireeasy is an on-demand virtual training platform built for sales and support teams.{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:underline">
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-poppins font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Train your team for the real world
          </h1>
          <p className="mt-8 text-pretty text-lg font-inter font-medium text-gray-500 sm:text-xl/8 animate-fadeIn">
            Battle test customer-facing agents with real humans and real call scenarios. Train and ramp up your sales and support teams in days—not weeks. Polish pitches, identify skill gaps, curate hiring on one platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-bounce">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:underline">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
