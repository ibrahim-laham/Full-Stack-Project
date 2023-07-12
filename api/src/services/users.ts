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

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> => {
  const user = await User.findByIdAndUpdate(
    userId,
    update,
    { new: true }
  );
  if (!user) {
    throw new NotFoundError(`could not find the user with the _id ${userId}`);
  }
  return user;
};

export default { createUserService, findUserByEmail, updateUser };
