import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export default function(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    }
  
    next();
}