import {Request, Response} from "express";
import {executeDatabaseQuery} from "../../db/db.js"


export async function deleteListing(req: Request, res: Response) {

if (!req.session.user) {
    return res.status(401).json({message: "Error user not logged in"});
}

const {public_id: listingToDelete} = req.body;
const user = req.session.user;

const sql = `
UPDATE listings 
deleted = TRUE
WHERE (created_by = $1) AND (public_id=$2)`

const values = [user, listingToDelete]

const result = await executeDatabaseQuery(sql,values);

return res.status(200).json({public_id:result.rows[0].public_id});

}