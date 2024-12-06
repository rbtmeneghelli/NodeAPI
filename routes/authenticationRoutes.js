import express from "express";
import {
  login,
  publicAuth,
  protectedAuth,
  createUser,
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
router.post(
  "/user/create",
  validateToken,
  authorizeRoles(["admin"]),
  createUser
);

export default router;
