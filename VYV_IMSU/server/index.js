const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const RegisterModel = require('./models/Register');

const app = express();
app.use(cors({
    origin: ["https://vyv-imsu-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://vdolera:Integ2@imsu.pjwjc.mongodb.net/?retryWrites=true&w=majority&appName=IMSU', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Root Route
app.get("/", (req, res) => {
    res.json("Hello");
});

// Register Route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await RegisterModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = await RegisterModel.create({ username, email, password, userType: hashedPassword });
        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (err) {
        console.error("Error during registration:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await RegisterModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Respond with a success message and user information
        return res.status(200).json({ 
            message: "Login successful",
            user: { 
                userId: user._id, 
                email: user.email 
            } 
        });
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
});


// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
