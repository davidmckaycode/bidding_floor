import express from "express"
import {createListing} from "../controllers/listings/createListing.js"
import {login} from "../controllers/accounts/login.js"
import {me} from "../controllers/accounts/me.js"
import {logout} from "../controllers/accounts/logout.js"
import {viewMyListings} from "../controllers/listings/viewMyListings.js"

const router = express.Router();

router.post("/create", createListing);
router.get("", viewMyListings)

//router.post("/delete", login)
//router.get("/update", me)


export default router;

