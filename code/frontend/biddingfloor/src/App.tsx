import './App.css'


function Content_Area() {

  return (
	<div className="flex-1 w-full rounded-lg mt-[1vw] bg-[var(--floating-ui-background-color)]"></div>
  )
}


function TopBar() {
  return (
  	<div className="flex items-start justify-center">
  		<h1 className="text-center rounded-lg w-1/4 bg-[var(--floating-ui-background-color)]">PageInfo</h1>
  	</div>
  )
}

function Side_Bar() {

  return (
    <nav className="order-first flex h-full flex-col rounded-lg shrink-0 bg-[var(--floating-ui-background-color)]">
		<h1 className="whitespace-nowrap">Bidding Floor</h1>
		<ul className="flex flex-col flex-1 text-[#4d4d4d] [&_*]:text-sm divide-y">
			<li>Search</li>
			<li>Bids</li>
			<li>listings</li>
			<li>Alerts</li>
		</ul>
		<h1 className="mt-auto border-t-1">Account</h1>
	</nav>
  )
}

function AppContent() {
  return (

	<div className="h-screen w-screen p-[1vw] bg-[var(--app-background-color)]">
        	<div className="flex flex-1 flex-row w-full h-full">
        		<div><Side_Bar/></div>
        		<div className="flex flex-col flex-1 pl-[1vw] bg-[var(--app-background-color)]">
        			<TopBar/>
        			<Content_Area/>
        		</div>
        	</div>
        </div>
  )
}



function App() {
  return (
  	<AppContent/>
  )



}
export default App



