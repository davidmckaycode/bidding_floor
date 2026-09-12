import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export function usePageTitle(title: string) {
    
    const {setTitle} = useOutletContext<{
    setTitle: (title: string) => void;
}>();

    useEffect(() => {
        setTitle(title);

    }, [title, setTitle]);
    
}