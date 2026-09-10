import {usePageTitle} from "../layouts/usePageTitle"



type listingInformation = {

previewImageURL :string,
title :string,
description :string,
currentWinnersName :string,
currentHighestBid : number,
myHighestBidPrice : number,
timeRemaining: Date

}

type listingInformationProp = {
    listing: listingInformation;
}

type listingsProp = {
    listings: listingInformation[];
}

const listingInformationData: listingInformation[] = [
  {
    previewImageURL: new URL("https://example.com/watch.jpg"),
    title: "Vintage Watch",
    description: "A vintage watch in great condition.",
    currentWinnersName: "John",
    currentHighestBid: 250,
    myHighestBidPrice: 200,
    timeRemaining: new Date("2026-08-30T18:00:00"),
  },
  {
    previewImageURL: new URL("https://example.com/shoes.jpg"),
    title: "Running Shoes",
    description: "Brand new running shoes.",
    currentWinnersName: "Sarah",
    currentHighestBid: 120,
    myHighestBidPrice: 100,
    timeRemaining: new Date("2026-08-31T14:00:00"),
  },
];


function Listings({listings}: listingsProp) {

return (

<div className = "Flex flex-col">

{listings.map((listing,index) => (
<ListingItem key={index} listing={listing}/>))}

</div>
);

}



function ListingItem({listing} : listingInformationProp) {

return (

<div className = "border-1 flex">

    <img className="w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W6nMRLTLEaMDqskBVmENvtLEWTnX-YIrOTvyfFC9LT9ITxBLm7cOFyI&s=10"/>

    <div>
        <h2 className="text-center">Title: {listing.title}</h2>
        <p className="text-center">Description: {listing.description}</p>
        <div className = "flex">
            <p className="flex-1">Current Winner: {listing.currentWinnersName}</p>
            <p className="flex-1">Highest Bid: {listing.currentHighestBid}</p>
            <p className="flex-1">My Highest Price: {listing.myHighestBidPrice}</p>
            <p className="flex-1">Time: {listing.timeRemaining.toString()}</p>
        </div>
    </div>

</div>
);
}


function Search() {
    
return     (
    <search className="text-center">
        <form>
            <label>Search: </label>
            <input className="border-1"></input>
            <button className="border-1" >Go</button>
        </form>
    </search>
    );

}

function Footer() {

return (

<div className="flex justify-between *:flex **:gap-x-1 underline">

<div>
<p>&lt;&lt;</p>    
<p>&lt;</p>  
</div>

<div>
<p>1</p>  
<p>2</p>  
<p>3</p>  
<p>4</p>  
<p>5</p>  
</div>

<div>
<p>&gt;</p>  
<p>&gt;&gt;</p>  
</div>
    
</div>)

}

export function ListingsPage() {
    
usePageTitle("Listings");

    
    return (

<div className="*:w-4/5 *:mx-auto">
<Search/>

<br/>
<Listings listings={listingInformationData}/>
<Footer/>
</div>

    ); 
    
}