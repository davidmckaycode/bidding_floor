

//post request
//end session

export async function logout(req, res) {
 
    
    req.session.destroy((err) => {

        if (err) {
            return res.status(401).json({message: "could not log out"});
        }

        res.clearCookie("connect.sid");

        return res.json({
            message: "logged out"
        })

    });

}