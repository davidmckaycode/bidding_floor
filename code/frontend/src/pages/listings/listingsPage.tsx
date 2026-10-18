import {usePageTitle} from "../../layouts/usePageTitle"
import {CreateListingButton} from "./listingsPageModal.tsx"
import {useSearchParams, useNavigate} from "react-router"
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

    <div className="flex">
        <p>{JSON.stringify(listing.title)}</p>
        <p>{JSON.stringify(listing.description)}</p>
        <p>{JSON.stringify(listing.status)}</p>
        <p>{JSON.stringify(listing.created_at)}</p>
        <p>{JSON.stringify(listing.end_at)}</p>
        <p>{JSON.stringify(listing.created_by)}</p>
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

function Footer({currentPage, totalPages, itemsPerPage}:{currentPage: number; totalPages: number; itemsPerPage: number}) {


    const startPage = Math.max(1,Math.min(currentPage-2,totalPages-4));

    const visiblePages = Math.min(5, totalPages);

    const naviagte = useNavigate();

    function goToPage(pageNum :number) {

     naviagte(`/listings?page=${pageNum}&itemsPerPage=${itemsPerPage}`);

    }

return (

<div className="flex justify-between *:flex **:gap-x-1 underline">

<div>
 <button onClick={() => goToPage(1)} disabled={currentPage <= 1}>&lt;&lt;</button>
<button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>&lt;</button>
</div>

<div>
{Array.from({length: visiblePages}, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(startPage + i)}
                        className={
                            currentPage === startPage + i
                                ? "font-bold"
                                : ""
                        }
                    >
                        {startPage + i}
                    </button>
                ))}
</div>

<div>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages}>&gt;</button>
                <button onClick={() => goToPage(totalPages)} disabled={currentPage >= totalPages}>&gt;&gt;</button>
</div>
    
</div>)

}





export function ListingsPage() {
    
usePageTitle("Listings");

const [searchParams] = useSearchParams();

const page = Number(searchParams.get("page")) || 1;
const itemsPerPage = Number(searchParams.get("itemsPerPage")) || 5;

const [listingsData, setListingsData] = useState<listingType[]>([]);
const [pageCount, setPageCount] = useState<number>(0);

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
            setListingsData(data.listings);
            setPageCount(data.pageCount);
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
<Footer currentPage={page} totalPages={pageCount} itemsPerPage={itemsPerPage}/>
</div>
</div>
    ); 
    
}

//to footer we need to pass, page and maxpage