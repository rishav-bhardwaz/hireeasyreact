import React from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { ApplicationTable } from './Applicationtable';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

interface JobDetails {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salary: string;
  postedDate: string;
}

interface JobCardProps {
  job: JobDetails;
}

export function JobCard({ job }: JobCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showJobDetails, setShowJobDetails] = React.useState(false);

  return (
    <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
              <div className="flex space-x-4 text-sm text-gray-600 mt-1">
                <span>{job.department}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowJobDetails(true)}
            >
              View Job Details
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-200 p-6">
          <h4 className="text-lg font-semibold mb-4">Applications</h4>
          <ApplicationTable jobId={job.id} />
        </div>
      )}

      <Dialog open={showJobDetails} onOpenChange={setShowJobDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Job Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="mt-2 text-gray-600">{job.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Requirements</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Salary Range</h3>
                <p className="mt-2 text-gray-600">{job.salary}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Posted Date</h3>
                <p className="mt-2 text-gray-600">{job.postedDate}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}