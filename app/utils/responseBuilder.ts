import { Response } from "express";

export const createErrorResponse = (err: any) => {
  return {
    ok: false,
    err,
  };
};

export const createOkResponse = (obj: any) => {
  return {
    ok: true,
    ...obj,
  };
};

export const buildResponse = (data: any, res: Response) => {
  if (data.ok) {
    return res.status(200).json(data);
  } else {
    return res.status(400).json(data);
  }
};
