import { useState } from "react"

function useSearchInput() {
    const [search, setSearch] = useState("")
    
    
    return {
        search,
        onСhange: (event) => setSearch(event.target.value)
    
    }
}


export default useSearchInput