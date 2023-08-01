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
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    const newUser = await usersServices.createUser(user);
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
        firstName: userData.firstName,
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
    const { firstName, lastName, email, password } = req.body;
    const userId = req.params.userId;
    type UpdateFromUser = {
      firstName: string,
      lastName: string,
      email: string,
      password: string,
    }
    let updateFromUser: UpdateFromUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password
    };

    const salt = await bcrypt.genSalt(12);
    let hashedPassword= ""
    
    if (password) {
       hashedPassword = await bcrypt.hash(password, salt);
       updateFromUser = { ...updateFromUser, password: hashedPassword };
    }
    

    const user = await usersServices.updateUser(userId, updateFromUser);

    res.status(200).json({
      message: "updated user information",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const user = await usersServices.getUserById(userId);
    res.status(200).json({
      message: "found user by id",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userList = await usersServices.getAllUsers();
    res.status(200).json(userList);
  } catch (error) {
    next(error);
  }
};

export const makeAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;
    await usersServices.makeAdmin(userId);

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
