import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import usersServices from "../services/users";
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

    const newUser = await usersServices.createUserService(user);
    res.status(200).json({
      message: "create user",
      users: newUser,
    });
  } catch (error) {
    next(error);
  }
};

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const loginWithPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userEmail = await req.body.email;
    const userData = await usersServices.findUserByEmail(userEmail);
    if (!userData) {
      return res
        .status(403)
        .json({ message: "could not find user in the database" });
    }

    const token = jwt.sign(
      {
        email: userData.email,
        nickName: userData.nickName,
        _id: userData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ userData, token });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;
    const update = req.body;
    const user = await usersServices.updateUser(userId, update);

    res.status(200).json({
      message: "updated user password",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};
