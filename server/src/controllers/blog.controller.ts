import { Request, Response } from "express";
import * as blogServices from "../services/blog.service";
import { Blog } from "../types/blog.types";

// get all blog posts
export const getAllBlogs = (_req: Request, res: Response) => {
  const data: Blog[] = blogServices.getAllBlogs();
  return res.status(200).json({
    data: data,
  });
};
