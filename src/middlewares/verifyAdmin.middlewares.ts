import { Request, Response, NextFunction } from "express";

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    if (decoded.isdm == true) {
      next();
    }

    decoded.id === id
      ? next()
      : res.status(401).json({
          message: "Missing Admin authorization",
        });
  });
};
