import {Request, Response} from "express";
import {executeDatabaseQuery} from "../../db/db.js"



export async function viewListing(req: Request, res: Response) {

const {public_id: listingToView} = req.body;

const sql = `
SELECT (public_id, title, description, status, created_at, end_at, created_by)
FROM listings
WHERE (public_id=£1);`
const values = [listingToView]

const results = await executeDatabaseQuery(sql,values);

const resultsRow = results.rows[0];



/////////////////////////////////////

const publicUserId = getPublicUserID(resultsRow.created_by);

/////////////////////////////////////






const responseData = {
    public_id: resultsRow.public_id,
    title: resultsRow.title,
    description: resultsRow.description,
    status: resultsRow.status,
    created_at: resultsRow.created_at,
    end_at: resultsRow.end_at,
    created_by: publicUserId

};








return res.status(200).json(responseData);

}