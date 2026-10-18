import {Request, Response} from "express";
import {executeDatabaseQuery} from "../db/db.js"

export async function getMyBids(req: Request, res: Response) {

const page = Number(req.query.page) || 1;
const itemsPerPage = Number(req.query.itemsPerPage) || 25;

const offset = itemsPerPage * (page - 1)

/*



*/

const sql = `SELECT public_id, title, description, status, created_at, end_at, created_by
FROM listings
WHERE created_by = $1 AND deleted = false
ORDER BY created_at DESC, public_id DESC
limit $2
offset $3;`;

const values = [user_id,itemsPerPage,offset]

const result = await executeDatabaseQuery(sql,values);

const resultRows= result.rows;

console.log(resultRows);

return res.status(201).json(resultRows);


}       