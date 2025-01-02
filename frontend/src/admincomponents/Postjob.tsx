import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface JobPost {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  salaryMin: number;
  salaryMax: number;
}

const initialJobs: JobPost[] = [
  {
    id: 1,
    title: 'Senior React Developer',
    description: 'We are looking for an experienced React developer to join our team.',
    requirements: ['5+ years React experience', 'TypeScript proficiency', 'Team leadership'],
    salaryMin: 90000,
    salaryMax: 150000,
  },
];

export default function JobPosting() {
  const [jobs, setJobs] = useState<JobPost[]>(initialJobs);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<JobPost>>({
    title: '',
    description: '',
    requirements: [],
    salaryMin: 0,
    salaryMax: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setJobs(jobs.map(job => 
        job.id === isEditing 
          ? { ...job, ...formData, requirements: formData.requirements || [] }
          : job
      ));
      setIsEditing(null);
    } else {
      setJobs([...jobs, { 
        ...formData as JobPost,
        id: jobs.length + 1,
        requirements: formData.requirements || []
      }]);
    }
    setFormData({
      title: '',
      description: '',
      requirements: [],
      salaryMin: 0,
      salaryMax: 0,
    });
  };

  const handleEdit = (job: JobPost) => {
    setIsEditing(job.id);
    setFormData(job);
  };

  const handleDelete = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {isEditing ? 'Edit Job Posting' : 'Create New Job Posting'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description || ''}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Requirements (one per line)</label>
            <textarea
              value={formData.requirements?.join('\n') || ''}
              onChange={e => setFormData({
                ...formData,
                requirements: e.target.value.split('\n').filter(req => req.trim() !== '')
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Minimum Salary</label>
              <input
                type="number"
                value={formData.salaryMin || ''}
                onChange={e => setFormData({ ...formData, salaryMin: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Maximum Salary</label>
              <input
                type="number"
                value={formData.salaryMax || ''}
                onChange={e => setFormData({ ...formData, salaryMax: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-4 w-4 mr-2" />
            {isEditing ? 'Update Job' : 'Create Job'}
          </button>
        </form>
      </div>


      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Job Listings</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-white opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800">Requirements:</h4>
                    <ul className="mt-2 space-y-2">
                      {job.requirements.map((req, index) => (
                        <li 
                          key={index} 
                          className="text-gray-600 flex items-center before:content-['•'] before:mr-2 before:text-blue-500"
                        >
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-gray-700 font-medium">
                    Salary Range: 
                    <span className="text-blue-600 ml-2">
                      ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}
                    </span>
                  </p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(job)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    title="Edit job"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    title="Delete job"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}