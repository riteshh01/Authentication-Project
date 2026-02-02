import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
        try {
            const {name, email, password} = req.body;
            
            // 1) validation
            if(!name || !email || !password){
                return res.status(400).json({message: "All fields are required"});
            }

            // 2) check existing user
            const existingUser = await User.findOne({email});

            if(existingUser){
                return res.status(409).json({message: "User Already Exists"});
            }

            // 3) Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);

            // 4) Create User
            await User.create({
                name,
                email, 
                password: hashedPassword,
            })

            res.status(201).json({success: true,message: "User registered successfully",});


        } catch (error) {
            res.status(500).json({ message: "Server error" });
        }
}



export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1) validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 2) user exist?
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3) password match?
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 4) generate token
    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // set JWT in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true in production (HTTPS)
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



export const getMe = async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
};