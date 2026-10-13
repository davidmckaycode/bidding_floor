import {Request, Response} from "express";
import {executeDatabaseQuery} from "../../db/db.js"


export async function createListing(req: Request, res: Response) {

if (!req.session.user) {
    return res.status(401).json({message: "Error user not logged in"});
}

const {title, description, end_at, timezone} = req.body;
const user = req.session.user;

const sql = `
INSERT INTO listings (title, description, created_by, end_at)
VALUES ($1,$2,$3,$4::timestamp AT TIME ZONE $5)
RETURNING public_id;`

const values = [title, description, user, end_at, timezone]

const result = await executeDatabaseQuery(sql,values);

return res.status(201).json({message: "success"});

}