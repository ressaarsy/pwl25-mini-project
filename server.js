import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import musicRoutes from "./routes/musicRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/music", musicRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
