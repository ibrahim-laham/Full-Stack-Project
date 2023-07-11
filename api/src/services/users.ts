import User, { UserDocument } from "../models/user";

const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
};

export default {createUserService};
