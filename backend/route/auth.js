import express from "express";
const router = express.Router();

import { register, logIn, logOut, isUserLoggedIn } from "../controller/auth.js";

//For signup
router.post("/register", register);

// For Siggn in

router.post("/login", logIn);

//For signout
router.get("/logout", logOut);

router.get("/isloggedin", isUserLoggedIn);

// router.get("/test", isSignedIn, (req, res) => {
//   res.send("A protected route");
// });
export default router;
