




export async function me(req, res) {


if (!req.session.user) {
    return res.status(401).json({
        message: "Not logged in"
    });
}

res.json({
    userID: req.session.user
});



}