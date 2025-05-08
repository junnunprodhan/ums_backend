import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config";

// Route imports
// import authRoutes from "./routes/auth.routes";
// import postRoutes from "./routes/post.routes";
// import blogRoutes from "./routes/blog.routes";
// import imageRoutes from "./routes/image.routes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// DB connection
connectDB();

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/images", imageRoutes);

// Health Check
app.get("/", (_, res) => {
  res.send("🚀 API is running...");
});

export default app;
