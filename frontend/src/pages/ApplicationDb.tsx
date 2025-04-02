import { useEffect, useState } from 'react';
import { JobCard } from '../admincomponents/Adminjobcard';
import Sidebar from '../admincomponents/Sidebar';
import { APPLICATION } from '../api/applicationAPI';

function ApplicationDb() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await APPLICATION.GetApplications();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching job applications:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Job Applications Dashboard</h1>
          <div className="space-y-6">
            {jobs.length > 0 ? (
              jobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p>No job applications found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDb;
