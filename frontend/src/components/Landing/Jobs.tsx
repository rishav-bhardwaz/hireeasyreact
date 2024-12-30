import JobCard from './Jobcard';

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "Web Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris",
    contactPhone: "+990 343 23443",
    contactEmail: "contact@devid.com"
  },
  {
    title: "Senior Frontend Developer",
    company: "Web Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris",
    contactPhone: "+990 343 23443",
    contactEmail: "contact@devid.com"
  },
  {
    title: "Senior Frontend Developer",
    company: "Web Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris",
    contactPhone: "+990 343 23443",
    contactEmail: "contact@devid.com"
  },
  {
    title: "Senior Frontend Developer",
    company: "Web Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris",
    contactPhone: "+990 343 23443",
    contactEmail: "contact@devid.com"
  }
];

function Jobs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Available Jobs</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;