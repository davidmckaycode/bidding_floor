import express from "express";
import { register } from "../controllers/accounts/register.js";
import { login } from "../controllers/accounts/login.js";
import { me } from "../controllers/accounts/me.js";
import { logout } from "../controllers/accounts/logout.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me", me);
router.post("/logout", logout);
export default router;
//# sourceMappingURL=auth.js.map