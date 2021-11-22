// this middleware assumes that the requireAuth property is already done 
import {Request, Response, NextFunction} from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-erros';
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if(!req.currentUser) {
        throw new NotAuthorizedError;
    }
}