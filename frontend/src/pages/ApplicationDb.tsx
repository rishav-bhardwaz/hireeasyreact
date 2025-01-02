import { JobCard } from '../admincomponents/Adminjobcard';
import Sidebar from '../admincomponents/Sidebar';

const mockJobs = [
  {
    id: 'job1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking an experienced Frontend Developer to join our team and help build exceptional user experiences. The ideal candidate will have a strong background in React and modern frontend technologies.',
    requirements: [
      'Minimum 5 years of experience with React',
      'Strong understanding of TypeScript',
      'Experience with modern frontend build tools',
      'Excellent problem-solving skills',
      'Strong communication abilities',
    ],
    salary: '$120,000 - $150,000',
    postedDate: '2024-01-15',
  },
  {
    id: 'job2',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'We\'re looking for a Backend Engineer to help scale our infrastructure and build robust APIs. The ideal candidate will have experience with Node.js and cloud services.',
    requirements: [
      'Minimum 3 years of experience with Node.js',
      'Experience with AWS or similar cloud platforms',
      'Knowledge of database design and optimization',
      'Understanding of microservices architecture',
      'Experience with CI/CD pipelines',
    ],
    salary: '$130,000 - $160,000',
    postedDate: '2024-01-20',
  },
];

function ApplicationDb() {
  return (
    <>
    <div className="flex">
    <Sidebar />
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Job Applications Dashboard</h1>
        <div className="space-y-6">
          {mockJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default ApplicationDb;