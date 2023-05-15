import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerControl,
  testController,
  updateProfileController,
} from "../controllers/authControl.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

//Routers
const router = express.Router();
//regiter
router.post("/register", registerControl);
//login
router.post("/login", loginController);
//test
router.get("/test", requireSignIn, isAdmin, testController);
//Forgot-password
router.post("/forgot-password", forgotPasswordController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
