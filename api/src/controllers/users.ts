import { Request, Response } from "express";

import userServices from "../services/users";
import User from "../models/users";

export const createUser = async (req: Request, res: Response) => {
  const user = new User({
    nickName: req.body.nickName,
    email: req.body.email,
    password: req.body.password,
  });

  const newUser = await userServices.createUserService(user);
  res.status(200).json({
    message: "create user",
    users: newUser,
  });
};
