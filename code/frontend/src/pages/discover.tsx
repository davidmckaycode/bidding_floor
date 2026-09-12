import {usePageTitle} from "../layouts/usePageTitle"


/*

page content holder, holds list that contains normal list lists, trending lists and receommended lists

*/


type discoverPageContent = {pageContent: (listData | carouselData)[];}

type listData = {
    listings: listingInformation[],}

type carouselData = {
    title: string,
    listings: listingInformation[];
}

type listingInformation = {

previewImageURL :string,
title :string,
description :string,
currentWinnersName :string,
currentHighestBid : number,
myHighestBidPrice : number,
timeRemaining: Date

}


//////////////////////


const listingInformationData: listingInformation[] = [
            {
                previewImageURL: "https://example.com/watch.jpg",
                title: "Vintage Watch",
                description: "A vintage watch in great condition.",
                currentWinnersName: "John",
                currentHighestBid: 250,
                myHighestBidPrice: 200,
                timeRemaining: new Date("2026-08-30T18:00:00"),
            },
            {
                previewImageURL: "https://example.com/shoes.jpg",
                title: "Running Shoes",
                description: "Brand new running shoes.",
                currentWinnersName: "Sarah",
                currentHighestBid: 120,
                myHighestBidPrice: 100,
                timeRemaining: new Date("2026-08-31T14:00:00"),
            },
                        {
                previewImageURL: "https://example.com/watch.jpg",
                title: "Vintage Watch",
                description: "A vintage watch in great condition.",
                currentWinnersName: "John",
                currentHighestBid: 250,
                myHighestBidPrice: 200,
                timeRemaining: new Date("2026-08-30T18:00:00"),
            },
            {
                previewImageURL: "https://example.com/shoes.jpg",
                title: "Running Shoes",
                description: "Brand new running shoes.",
                currentWinnersName: "Sarah",
                currentHighestBid: 120,
                myHighestBidPrice: 100,
                timeRemaining: new Date("2026-08-31T14:00:00"),
            },
                        {
                previewImageURL: "https://example.com/watch.jpg",
                title: "Vintage Watch",
                description: "A vintage watch in great condition.",
                currentWinnersName: "John",
                currentHighestBid: 250,
                myHighestBidPrice: 200,
                timeRemaining: new Date("2026-08-30T18:00:00"),
            },
            {
                previewImageURL: "https://example.com/shoes.jpg",
                title: "Running Shoes",
                description: "Brand new running shoes.",
                currentWinnersName: "Sarah",
                currentHighestBid: 120,
                myHighestBidPrice: 100,
                timeRemaining: new Date("2026-08-31T14:00:00"),
            }
        ]




////////////////////////

const theDiscoverPageContent: discoverPageContent = {
    pageContent:
[
    {        
        listings: listingInformationData
    },
    {
        title: "Recommended",
        listings: listingInformationData,
    },
    {
        title: "Trending",
        listings: listingInformationData,
    }
]
}



























function CarouselItem({listing} : {listing: listingInformation}) {


    return (
<div className = "border-1 flex basis-1/5 shrink-0">

    <img className="w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W6nMRLTLEaMDqskBVmENvtLEWTnX-YIrOTvyfFC9LT9ITxBLm7cOFyI&s=10"/>

    <div>
        <h2 className="text-center">Title: {listing.title}</h2>
        <p className="text-center">Description: {listing.description}</p>
        <div className = "flex flex-col">
            <p className="flex-1">Highest Bid: {listing.currentHighestBid}</p>
            <p className="flex-1">Time: {listing.timeRemaining.toString()}</p>
        </div>
    </div>

</div>

    );
}



    

function Carousel({ listings, carouselTitle }:{ listings: listingInformation[]; carouselTitle: string }) {

    return (

<div>
<h1>{carouselTitle}</h1>
<div className ="flex overflow-x-auto">



{listings.map((listing,index) => (
<CarouselItem key={index} listing={listing}/>))}
</div>
</div>
    );
}



function ListingItem({listing} : {listing : listingInformation}) {

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


function Listings({listings}: listData) {

return (

<div className = "Flex flex-col text-center">

{listings.map((listing,index) => (
<ListingItem key={index} listing={listing}/>))}

</div>
);

}


function Search() {
    
return     (
    <search>
        <form className="text-center">
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



export function DiscoverPage() {
usePageTitle("Discover");

//theDiscoverPageContent

    
    return (
<div className="*:w-4/5 *:mx-auto">
    <Search/>
    <br/>
    <div className ="flex flex-col"> {/*Items*/}


        {
        theDiscoverPageContent.pageContent.map((element,index) => {
            if ("title" in element){
                return (<Carousel key={index} listings={element.listings} carouselTitle={element.title}/>);
            }
            else {
                return (<Listings key={index} listings={element.listings}/>);
            }

        })
        }
        
    </div>
    <Footer/>
</div>
    );
    
}


