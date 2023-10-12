import mongoose from 'mongoose';

interface IUser {
  name: string;

  id: string;
  pw: string;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  pw: {
    type: String,
  },
});

export default mongoose.model<IUser>('User', UserSchema);
