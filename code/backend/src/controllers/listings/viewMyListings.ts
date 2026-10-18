import {Request, Response} from "express";
import {executeDatabaseQuery} from "../../db/db.js"
import {type listingType} from "../../../../shared/listingType.js"

export async function viewMyListings(req: Request, res: Response) {


if (!req.session.user) {
    return res.status(401).json({message: "error not logged in"});
}

const user_id = req.session.user;

const page = Number(req.query.page) || 1;
const itemsPerPage = Number(req.query.itemsPerPage) || 25;

const offset = itemsPerPage * (page - 1);

const sql = `
WITH total AS (
SELECT COUNT(*):: int AS count
FROM listings
WHERE created_by = $1 AND deleted = false
),

paginated AS (
SELECT public_id, title, description, status, created_at, end_at, created_by
FROM listings
WHERE created_by = $1 AND deleted = false
ORDER BY created_at DESC, public_id DESC
limit $2
offset $3
)

SELECT 
coalesce(
(SELECT json_agg(paginated) FROM paginated),
'[]'::json
) AS listings,
 total.count AS total_listings
 FROM total;
`;

const values = [user_id,itemsPerPage,offset]

const result = await executeDatabaseQuery(sql,values);

const results: listingType[] = result.rows[0].listings.map(
    (row: listingType): listingType => ({
        public_id: row.public_id,
        title: row.title,
        description: row.description,
        status: row.status,
        created_at: row.created_at,
        end_at: row.end_at,
        created_by: row.created_by
    }));


const pageCount = Math.ceil((result.rows[0].total_listings) / itemsPerPage);




return res.status(201).json({listings: results,
    pageCount: pageCount});


}       

