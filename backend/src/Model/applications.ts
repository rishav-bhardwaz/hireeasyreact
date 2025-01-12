import mongoose, { Schema } from "mongoose";

interface ApplicationsType{
    userName:Schema.Types.ObjectId;
    resume:string;
    jobId:Schema.Types.ObjectId;
}

const ApplicationSchema = new Schema<ApplicationsType>({
    userName: { type: Schema.Types.ObjectId,ref:'User', required: true },
    resume: { type: String, required: true },
    jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true }
});

const Application = mongoose.model<ApplicationsType>('Application',ApplicationSchema);

export default Application;
