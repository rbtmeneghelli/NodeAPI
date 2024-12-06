import express from "express";
import { validateToken } from "../middleware/tokenMiddleware.js";
import { upload } from "../middleware/uploadMulterConfig.js";
import { uploadFile } from "../controllers/fileController.js";

const router = express.Router();

router.post("/file/upload", validateToken, upload.single("file"), uploadFile);

export default router;
