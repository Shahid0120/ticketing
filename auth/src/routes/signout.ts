import express from "express";

const router = express.Router();

router.get("/api/users/signout", (req, res) => {
  res.send("this is the signout page");
});

export { router as signoutRouter };
