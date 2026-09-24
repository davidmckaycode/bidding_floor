import argon2 from "argon2"
import {executeDatabaseQuery} from "../db/db.js"




export async function register(req, res) {

const {email, username, password} = req.body;

console.log("Doing something", email);


/*
take inputted email and password
convert to lowercase username
hash password
insert into table attempt
if accepted return accepted code
if rejected return error code

*/

const normalisedEmail = email.toLowerCase();
const normalisedUsername = username.toLowerCase();
const passwordHashed = await argon2.hash(password);

const sql = `
INSERT INTO users (username, password_hash, email) 
VALUES ($1,$2,$3)
RETURNING public_id, username, email;
`

const values = [normalisedUsername,passwordHashed,normalisedEmail]

await executeDatabaseQuery(sql,values);





res.json({message: "registered worked"})

}
