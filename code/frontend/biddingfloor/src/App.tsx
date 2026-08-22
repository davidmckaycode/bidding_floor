//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'




function Navigation_Bar() {

  return (
    <nav className={`order-first flex flex-col h-screen border-r-1`}>

		<h1 className="border-b-1">Bidding Floor</h1>
		<ul className="flex flex-col flex-1">
			<li>Search</li>
			<li>Bids</li>
			<li>listings</li>
			<li>Alerts</li>
			<li className="mt-auto border-t-1">Account</li>
		</ul>
	</nav>
  )
}


function App() {

  return (
  	<div className="flex">
  		<Navigation_Bar/>
  	        <h1 className="text-center flex-1 border-b-1 self-start">PageInfo</h1>
        </div>
  )




}
export default App



