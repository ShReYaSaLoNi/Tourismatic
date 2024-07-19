import mongoose from 'mongoose'; // Use import for modern modules

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['user', 'influencer'], default: 'user' },
  name: {type: String},
  profilePicture: {type: String},
  about: {type: String},
  gender: {type: String},
  // Influencer specific fields
  platform: {type: String},
  platformId: {type: String},
});

const User = mongoose.model('User', userSchema);

// Default export
export default User;
