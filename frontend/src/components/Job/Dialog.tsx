import React from 'react';
import { X } from 'lucide-react';
import { ApplicationForm } from './Application'
import ApplicationFormComponent from './Form';

interface ApplicationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
}

const ApplicationDialog: React.FC<ApplicationDialogProps> = ({
  isOpen,
  onClose,
  jobTitle,
  company,
}) => {
  const handleSubmit = (formData: ApplicationForm) => {
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="relative min-h-[calc(100vh-2rem)] md:min-h-0 w-full max-w-lg mx-auto my-8 md:my-0">
        <div className="bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-100 shrink-0">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Apply for Position</h2>
              <p className="text-sm text-gray-600">{jobTitle} at {company}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-y-auto">
            <ApplicationFormComponent onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDialog;