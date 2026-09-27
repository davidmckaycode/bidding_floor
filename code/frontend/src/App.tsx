import './App.css'


import {Layout} from "./layouts/Layout"



import {DiscoverPage} from "./pages/discover"
import {BidsPage} from "./pages/bidsPage"
import {ListingsPage} from "./pages/listingsPage"
import {NotificationsPage} from "./pages/notificationsPage"
import { AccountPage } from './pages/accountPage'
import { LoginPage } from './pages/loginPage'




import {Route, Routes} from "react-router"

function App() {
  return (

<Routes>
<Route element={<Layout/>}>

<Route index element={<DiscoverPage/>}/>
<Route path = "bids" element={<BidsPage/>}/>
<Route path = "listings" element={<ListingsPage/>}/>
<Route path = "notifications" element={<NotificationsPage/>}/>
<Route path = "account" element={<AccountPage/>}/>
<Route path = "login" element={<LoginPage/>}/>


</Route>
</Routes>



)



}
export default App