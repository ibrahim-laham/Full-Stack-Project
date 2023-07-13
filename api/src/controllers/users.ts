import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import usersServices from "../services/users";
import User from "../models/User";
import { UnauthorizedError } from "../helpers/apiError";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nickName, email, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      nickName: nickName,
      email: email,
      password: hashedPassword,
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
    const { email, password } = req.body;
    const userData = await usersServices.findUserByEmail(email);
    if (!userData) {
      return res
        .status(403)
        .json({ message: "email or password are incorrect" });
    }
    const hashedPassword = userData.password;
    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);

    if (!isCorrectPassword) {
      throw new UnauthorizedError("email or password are incorrect");
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
