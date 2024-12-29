import mongoose, { Schema } from "mongoose";

interface CompanyType{
    name:String;
    description:String;
    email:String;
    password:String;
}

const CompanySchema = new Schema<CompanyType>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    });


const Company = mongoose.model<CompanyType>('Company',CompanySchema);

export default Company;
