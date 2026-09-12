import { Outlet } from "react-router-dom"
import {useState} from "react"
import {Link} from "react-router"

function Content_Area({setTitleCallback}) {

  return (
	<div className="w-full h-full rounded-4xl mt-[1vw] bg-(image:--floating-ui-background-color) overflow-y-auto">

		<Outlet context={{setTitle : setTitleCallback}}/>
	</div>
  )
}

function Side_Bar() {

  return (
    <nav className="order-first flex h-full flex-col rounded-4xl shrink-0 bg-(image:--floating-ui-background-color) ">
		<h1 className="whitespace-nowrap text-4xl">Bidding Floor</h1>
		<ul className="flex flex-col flex-1 text-[#4d4d4d] [&_*]:text-2xl divide-y text-center">
			<li><Link to="/">Discover</Link></li>
			<li><Link to="/bids">Bids</Link></li>
			<li><Link to="/listings">Listings</Link></li>
			<li><Link to="/alerts">Alerts</Link></li>
		</ul>
		<Link to="/account" className="mt-auto border-t-1 text-xl">Account</Link>
	</nav>
  )
}

function TopBar({title}) {
  return (
  	<div className="flex items-start justify-center text-4xl">
  		<h1 className="text-center rounded-4xl w-1/4 bg-(image:--floating-ui-background-color) ">{title}</h1>
  	</div>
  )
  //bg-[var(--floating-ui-background-color)]
}


export function Layout() {

const [title, setTitle] = useState("");

  return (

	<div className="h-dvh w-full p-[1vw] overflow-hidden bg-(image:--app-background-color) **:text-[#ffffff]">
        	<div className="flex flex-1 flex-row w-full h-full">
        		<div><Side_Bar/></div>
        		<div className="flex flex-col flex-1 pl-[1vw]">
        			<TopBar title={title}/>
        			<Content_Area setTitleCallback={setTitle}/>
        		</div>
        	</div>
        </div>
  )
}