import mongoose, { Schema } from "mongoose";

interface CompanyType {
    name: string;
    description: string;
    email: string;
    password: string;
    admin: mongoose.Schema.Types.ObjectId; // Reference to the admin user
  }
  
  const CompanySchema = new Schema<CompanyType>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to an admin
  });
  
  const Company = mongoose.model<CompanyType>('Company', CompanySchema);
  
  export default Company;
  