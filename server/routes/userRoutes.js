import express from 'express'; // Use import for modern modules
const router = express.Router();
import bcrypt from 'bcrypt';
import User from '../models/User.js'; // Assuming User is an ES module

// Async/await syntax for cleaner handling of asynchronous operations
async function signup(req, res) {
  try {
    const { email, password, confirmPassword } = req.body;

    // Validate passwords
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check for existing user (using destructuring)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password with appropriate cost factor (consider increasing for stronger hashing)
    const hashedPassword = await bcrypt.hash(password, 12); // 12 is a recommended cost factor

    // Create a new user (destructuring for cleaner object creation)
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({error});
  }
}

// Define the POST route for signup
router.post('/signup', signup);

export default router; // Update export for ES modules
