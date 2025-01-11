import mongoose, { Schema } from 'mongoose';

interface UserType {
    name: string;
    email:string;
    phoneNo: string;
    password: string;
    role: 'admin' | 'user'; 
  }
  
  const UserSchema = new Schema<UserType>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'user'] }, 
  });
  
  const User = mongoose.model<UserType>('User', UserSchema);
  
  export default User;
  