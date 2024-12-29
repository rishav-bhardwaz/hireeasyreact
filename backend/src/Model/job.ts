import mongoose, { Schema } from "mongoose";

interface JobType{
    name:string;
    description:string;
    active:boolean;
    companyId:Schema.Types.ObjectId;
}

const JobSchema = new Schema<JobType>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, default: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true }
});

const Job = mongoose.model<JobType>('Job',JobSchema);

export default Job;
