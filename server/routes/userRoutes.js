import express from 'express'; // Use import for modern modules
const router = express.Router();
import bcrypt from 'bcrypt';
import User from '../models/User.js'; // Assuming User is an ES module

// Async/await syntax for cleaner handling of asynchronous operations
async function signup(req, res) {
  try {
    const { email, password, confirmPassword } = req.body;
    console.log(req.body);

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


async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Compare passwords (using bcrypt or similar)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Send successful login response
    res.status(200).json({ message: 'Login successful', userId: user._id});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
}

// Defining user routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/users/:userId', async (req, res) => {
  try {
    const user = await getUserById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(error.message === 'User not found' ? 404 : 500).json({ error: error.message });
  }
});
router.put('/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedUserData = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user' });
  }
});



export default router; // Update export for ES modules
