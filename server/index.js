import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; 
import cors from 'cors';

// Configure environment variables (optional)
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const corsOptions = {
  origin: 'http://localhost:3000' // Replace with your frontend's origin
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;


// Connect to MongoDB (make sure MongoDB is running)
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process on connection failure
  }
}

connectToDB();

// Routes
app.use('/api', userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
