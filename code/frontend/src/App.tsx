import './App.css'


import {Layout} from "./layouts/Layout"



import {DiscoverPage} from "./pages/discover"
import {BidsPage} from "./pages/bidsPage"
import {ListingsPage} from "./pages/listingsPage"
import {AlertsPage} from "./pages/alertsPage"
import { AccountPage } from './pages/accountPage'




import {Route, Routes} from "react-router"

function App() {
  return (

<Routes>
<Route element={<Layout/>}>

<Route index element={<DiscoverPage/>}/>
<Route path = "bids" element={<BidsPage/>}/>
<Route path = "listings" element={<ListingsPage/>}/>
<Route path = "alerts" element={<AlertsPage/>}/>
<Route path = "account" element={<AccountPage/>}/>


</Route>
</Routes>



)



}
export default App