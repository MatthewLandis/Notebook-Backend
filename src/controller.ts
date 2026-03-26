import { Request, Response, NextFunction } from 'express';
import * as service from './service.js';
import { INote } from './model.js';

export async function getNote(req: Request, res: Response<INote>, next: NextFunction) {
    try {
        const Note: INote = await service.getNote();
        res.status(200).json(Note);
        console.log("Controller hit");
    } catch (error) { next(error); }
};

export async function postNote(req: Request<INote>, res: Response, next: NextFunction) {
    try {
        const cardData: INote = req.body;
        await service.postNote(cardData);
        res.status(200).end();
    } catch (error) { next(error); }
};