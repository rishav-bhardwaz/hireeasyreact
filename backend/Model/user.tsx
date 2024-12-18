import mongoose, { Schema } from 'mongoose';

interface UserType {
    name: string;
    phoneNo:string;
}

const UserSchema = new Schema <UserType>({
    name: {type: String, required: true},
    phoneNo: {type: String, required: true}
});

const User = mongoose.model<UserType>('User',UserSchema);

export default User;