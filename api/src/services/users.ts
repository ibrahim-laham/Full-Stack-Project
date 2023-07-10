import User, { UserDocument } from "../models/users";

const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

export default {createUserService};
