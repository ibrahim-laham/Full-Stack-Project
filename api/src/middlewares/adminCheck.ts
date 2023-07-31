import { Request, Response, NextFunction } from "express";

import {UserDocument} from "../models/User"
import {ForbiddenError} from "../helpers/apiError"

const adminCheck = async (req: Request, res: Response, next: NextFunction) => {
  
  
  const userData = req.user as UserDocument;
  const userRole =  userData.role;

  console.log( userRole, "user");
  /* console.log(req, "request in middleware"); */
  if (userRole === "admin") {
    next();
  } else {
    throw new ForbiddenError();
  }
};

export default adminCheck;