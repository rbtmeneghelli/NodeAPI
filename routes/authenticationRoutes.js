import express from "express";
import {
  login,
  publicAuth,
  protectedAuth,
} from "../controllers/authenticationController.js";
import {
  validateToken,
  authorizeRoles,
} from "../middleware/tokenMiddleware.js";

const router = express.Router();

router.post("/authentication/login", login);
router.get("/authentication/public", publicAuth);
//router.get('/authentication/protected', authenticate, protectedAuth);
router.get("/authentication/protected", validateToken, protectedAuth);
router.get(
  "/authentication/protectedRole",
  validateToken,
  authorizeRoles(["user", "admin"]),
  protectedAuth
);

export default router;
