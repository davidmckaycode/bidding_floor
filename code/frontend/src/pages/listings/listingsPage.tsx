import {usePageTitle} from "../../layouts/usePageTitle"
import {CreateListingButton} from "./listingsPageModal.tsx"
import {useParams} from "react-router"
import {useEffect, useState} from "react"
import {type listingType} from "../../../../shared/listingType.ts"


interface ListingsProps {
    listings: listingType[];
}

function Listings({listings}: ListingsProps) {

return (

<div className = "Flex flex-col">

{listings.map((listing) => (
<ListingItem key={listing.public_id} listing={listing}/>))}

</div>
);

}



function ListingItem({listing} : {listing: listingType}) {

return (

<div className = "border-1 flex">

    <img className="w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W6nMRLTLEaMDqskBVmENvtLEWTnX-YIrOTvyfFC9LT9ITxBLm7cOFyI&s=10"/>

    <div>
        <p>{JSON.stringify(listing)}</p>
    </div>

</div>
);
}


function Search() {
    
return     (
    <div>




    <search className="text-center">
        <form>
            <label>Search: </label>
            <input className="border-1"></input>
            <button className="border-1" >Go</button>
        </form>
    </search>
    </div>
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

const params = useParams();
const page = Number(params.page) || 1;
const itemsPerPage = Number(params.itemsPerPage) || 20;

const [listingsData, setListingsData] = useState<listingType[]>([]);

//timezone

console.log(page);
console.log(itemsPerPage);
    



/*
need a function to get my listings
then need to display

*/

useEffect(() => {

    async function getMyListings() {

        await fetch((`/api/listings?page=${page}&itemsPerPage=${itemsPerPage}`), {credentials:"include"})
        .then((res) =>  {
            if (!res.ok) {
                throw new Error("error, couldn't fetch listings");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setListingsData(data);
        })

    }

    getMyListings();

}, [page,itemsPerPage]
);







 function handleSubmit(e : React.SubmitEvent<HTMLFormElement>) {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");
    const description = formData.get("description");
    const end_at = formData.get("end_at");
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    fetch("/api/listings/create", {
        method:"POST",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title,description,end_at,timezone})
    })
    .then((res) => {
        
        if (!res.ok) {
            throw new Error("failed to create listing");
        } 

        return res.json();
    })
    .then((data) => {
        console.log("Listing created: ", data);
    })
    .catch((error) => {
        console.error("Error creating listing:", error)
    });

}











    return (
<div>

    <div className="text-center">
<CreateListingButton handleSubmit={handleSubmit}/>
</div>

<div className="*:w-4/5 *:mx-auto">






<Search/>

<br/>
<Listings listings={listingsData}/>
<Footer/>
</div>
</div>
    ); 
    
}