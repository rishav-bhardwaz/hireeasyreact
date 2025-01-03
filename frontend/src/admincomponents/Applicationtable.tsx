import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { Eye, PhoneCall, Check, X } from 'lucide-react';

interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  experience: number;
  resumeUrl: string;
  coverLetter: string;
  status: 'pending' | 'accepted' | 'rejected';
}

// Mock data organized by job ID
const mockApplications: Record<string, Applicant[]> = {
  'job1': [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      experience: 5,
      resumeUrl: 'https://riszzzav.vercel.app',
      coverLetter: 'I am excited to apply for this position and believe my skills in frontend development make me an ideal candidate...',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 8901',
      experience: 3,
      resumeUrl: 'https://riszzzav.vercel.app',
      coverLetter: 'With my background in UI/UX design and frontend development, I am confident I can contribute significantly...',
      status: 'pending',
    },
  ],
  'job2': [
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234 567 8902',
      experience: 7,
      resumeUrl: 'https://riszzzav.vercel.app',
      coverLetter: 'As a senior backend developer with extensive experience in cloud architecture...',
      status: 'pending',
    },
  ],
};

interface ApplicationTableProps {
  jobId: string;
}

export function ApplicationTable({ jobId }: ApplicationTableProps) {
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const applications = mockApplications[jobId] || [];

  const handleStatusChange = (applicantId: string, newStatus: 'accepted' | 'rejected') => {
    console.log(`Applicant ${applicantId} ${newStatus}`);
  };

  const handleMakeCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>View Application</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((applicant) => (
            <TableRow key={applicant.id}>
              <TableCell className="font-medium">{applicant.name}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedApplicant(applicant);
                    setIsDetailsOpen(true);
                  }}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleMakeCall(applicant.phone)}
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Make Call
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-600 hover:text-green-700"
                    onClick={() => handleStatusChange(applicant.id, 'accepted')}
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Accept
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleStatusChange(applicant.id, 'rejected')}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplicant && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="space-y-2 mt-2">
                    <p className="text-sm">
                      <span className="font-medium">Email:</span>{' '}
                      {selectedApplicant.email}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span>{' '}
                      {selectedApplicant.phone}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Experience:</span>{' '}
                      {selectedApplicant.experience} years
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Status</h3>
                  <div className="mt-2">
                    <Badge
                      variant={
                        selectedApplicant.status === 'accepted'
                          ? 'default'
                          : selectedApplicant.status === 'rejected'
                          ? 'destructive'
                          : 'secondary'
                      }
                    >
                      {selectedApplicant.status.charAt(0).toUpperCase() +
                        selectedApplicant.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold">Cover Letter</h3>
                <p className="text-sm mt-2">{selectedApplicant.coverLetter}</p>
              </div>

              <div>
                <h3 className="font-semibold">Resume</h3>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => window.open(selectedApplicant.resumeUrl, '_blank')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}