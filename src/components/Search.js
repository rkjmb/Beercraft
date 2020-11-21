import React, { useState, useEffect } from 'react'

const Search = ({ setsearchText }) => {
    const [debouncedTerm, setdebouncedTerm] = useState("")

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setsearchText(debouncedTerm);
        }, 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [debouncedTerm, setsearchText])

    return (
        <input placeholder={"Search by beer name"} onChange={(e) => setdebouncedTerm(e.target.value)} value={debouncedTerm} />
    )
}

export default Search
