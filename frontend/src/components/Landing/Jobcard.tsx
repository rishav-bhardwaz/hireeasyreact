import { Phone, Mail } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  description: string;
  contactPhone: string;
  contactEmail: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  description,
  contactPhone,
  contactEmail,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600">{company}</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
            Apply Now
          </button>
        </div>
      </div>

      <div className="p-6 border-b border-gray-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Job Description</h4>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="p-6 flex flex-wrap gap-6 text-gray-600">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-600" />
          <span>{contactPhone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>{contactEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;