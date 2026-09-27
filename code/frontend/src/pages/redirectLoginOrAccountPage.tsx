import { AccountPage} from "./accountPage"
import { LoginPage} from "./loginPage"
import {useAuth} from "../context/AuthContext"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"


 
export function RedirectLoginOrAccountPage (pageType : ( typeof AccountPage | typeof LoginPage)) {

    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if ((pageType === AccountPage) && (!user)) {
            navigate("/login");
        } else if ((pageType === LoginPage) && (user)) {
            navigate("/account");
        }

    }, [user, navigate,pageType]


    );

}

