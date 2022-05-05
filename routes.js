import express from "express";
import * as authCtrl from "./controllers/auth-ctrl.js";

const Router = express.Router();

// Auth Routes
Router.post("/otp/generate", authCtrl.generate_OTP);
Router.post("/otp/verify", authCtrl.verify_OTP);

export default Router;