import {usePageTitle} from "../layouts/usePageTitle"
import {RedirectLoginOrAccountPage} from "./redirectLoginOrAccountPage.tsx"
import {useAuth, type User} from "../context/AuthContext"




export function LoginPage() {
    
usePageTitle("Login");
RedirectLoginOrAccountPage(LoginPage);

const {setUser} = useAuth();

function handleSubmit(e : React.SubmitEvent) {

    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    fetch("/api/auth/login", 
        {method: "POST", 
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
        }
    )
    .then((res) => {

        if (!res.ok) {
            throw new Error("login failed");
        }

        return res.json();
    })
    .then((data) => {
        console.log(data);

        const newUser: User = {
            email: data.email,
            username: data.username,
            public_id: data.public_id
        }

        setUser(newUser);
    })
    .catch((err) => {
        console.log(err);
    })



}




    
    return (
    
    
    <form onSubmit={handleSubmit} className="text-center">
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" className="border"></input>
        
        <br></br>
        
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" className="border"></input>

        <br></br>

        <button type="submit" className="border">Submit</button>
    </form>



    );
}