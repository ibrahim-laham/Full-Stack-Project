import { Request, Response, NextFunction } from "express";

import userServices from "../services/users";
import User from "../models/user";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};
