import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js"
import session from "express-session"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(session({
   secret: "xyz",
   resave: false,
   saveUninitialized: false 
}));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
