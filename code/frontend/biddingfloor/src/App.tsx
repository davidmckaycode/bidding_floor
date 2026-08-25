import './App.css'


import {Layout} from "./layouts/Layout"
import {DiscoverPage} from "./pages/discover"
import {Route, Routes} from "react-router"

function App() {
  return (

<Routes>

<Route element={<Layout/>}>

<Route index element={<DiscoverPage/>}/>

</Route>


</Routes>



)



}
export default App