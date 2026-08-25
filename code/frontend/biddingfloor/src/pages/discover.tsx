import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export function DiscoverPage() {
    
    const {setTitle} = useOutletContext<{
    setTitle: (title: string) => void;
}>();

    useEffect(() => {
        setTitle("Discover");

    }, [setTitle]);

    
    return <h1>HI</h1>;
    
}