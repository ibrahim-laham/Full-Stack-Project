import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/user";

const createUserService = async (user: UserDocument): Promise<UserDocument> => {
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

const updateUserPassword = async (
  userId: string,
  newPassword: string
): Promise<UserDocument> => {
  const user = await User.findByIdAndUpdate(userId, { password: newPassword });
  if (!user) {
    throw new NotFoundError(`could not find the user with the _id ${userId}`);
  }
  return user;
};

export default { createUserService, findUserByEmail, updateUserPassword };
