import {executeDatabaseQuery} from "../../db/db.js";
import argon2 from "argon2";
import {Request, Response} from "express";




export async function login(req : Request, res: Response) {

    const {email, password} = req.body;

    const sql = `Select * FROM users WHERE EMAIL = $1`;
    const value = [email.toLowerCase()];

    const result = await executeDatabaseQuery(sql,value);
    const user = result.rows[0];

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    } 

    const passwordMatches = await argon2.verify(user.password_hash, password);

    if (!passwordMatches) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    req.session.user = user.id;
    
    res.json({
       "email": user.email,
       "username": user.username,
       "public_id": user.public_id
    });

}