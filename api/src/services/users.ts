import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/User";

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
};

const findUserByEmail = async (userEmail: string): Promise<UserDocument> => {
  const user = await User.findOne({ email: userEmail });
  if (!user) {
    throw new NotFoundError(
      `could not find the user with the email ${userEmail}`
    );
  }
  return user;
};

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> => {
  const user = await User.findByIdAndUpdate(userId, update, { new: true });
  if (!user) {
    throw new NotFoundError(`could not find the user with the _id ${userId}`);
  }
  return user;
};

const getUserById = async (userId: string): Promise<UserDocument> => {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`could not find the user with the _id ${userId}`);
  }
  return user;
};

export const getAllUsers = async (): Promise<UserDocument[]> => {
  return await User.find();
};

export const makeAdmin = async (userId: string) => {
  const user = await User.findById(userId);
  if (user) {
    if (user.role === "admin") {
      user.role = "user";
    } else {
      user.role = "admin";
    }
    await updateUser(userId, user);
  } else {
    throw new NotFoundError(`could not find the user with the id ${userId}`);
  }
};

export default {
  getAllUsers,
  createUser,
  findUserByEmail,
  updateUser,
  getUserById,
  makeAdmin
};
