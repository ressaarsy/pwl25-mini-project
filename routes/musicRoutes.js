import express from "express";
import {
  getAllMusic,
  getMusicById,
  createMusic,
  updateMusic,
  deleteMusic,
} from "../controllers/musicController.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.get("/", getAllMusic);
router.get("/:id", getMusicById);
router.post("/", validate, createMusic);
router.put("/:id", validate, updateMusic);
router.delete("/:id", deleteMusic);

export default router;
