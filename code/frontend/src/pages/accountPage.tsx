import {usePageTitle} from "../layouts/usePageTitle.tsx"
import {RedirectLoginOrAccountPage} from "./redirectLoginOrAccountPage.tsx"
import {useAuth} from "../context/AuthContext.tsx"


export function AccountPage() {
    
const { setUser } = useAuth();
usePageTitle("Account");
RedirectLoginOrAccountPage(AccountPage);


function handleLogout(e: React.SubmitEvent) {
    e.preventDefault();

    fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
    })
    .then((res) => {

        if (!res.ok) {
            throw new Error("Logout failed");
        }

        return res.json();
    })
    .then((data) =>{
        console.log(data);
        setUser(null);
    })
    .catch((err) => {
        console.log(err);
    })
}



    return (
    
    <form onSubmit={handleLogout}>
    <button className="border block mx-auto" type="submit">Logout</button>
    </form>


    );
}