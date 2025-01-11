import mongoose, { Schema } from 'mongoose';

interface UserType {
    name: string;
    email:string;
    phoneNo: string;
    password: string;
    isValidatedPassword(candidatePassword: string, userPassword: string): boolean;
    role: 'admin' | 'user'; 
  }
  
  const UserSchema = new Schema<UserType>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'user'] }, 
  });

  UserSchema.methods.isValidatedPassword = function (
    candidatePassword: string,
    userPassword: string
): boolean {
    return candidatePassword === userPassword;  
};
  
  const User = mongoose.model<UserType>('User', UserSchema);
  
  export default User;
  