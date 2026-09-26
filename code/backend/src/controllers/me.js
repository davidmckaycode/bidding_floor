import {executeDatabaseQuery} from "../db/db.js"




export async function me(req, res) {


if (!req.session.user) {
    return res.status(401).json({
        message: "Not logged in"
    });
}



const query = `SELECT public_id, username, email FROM users WHERE public_id = ($1);`
const value = [req.session.user]

const result = await executeDatabaseQuery(query,value);
const user = result.rows[0];





res.json({
    public_id: user.public_id,
    username: user.username,
    email: user.email
});



}