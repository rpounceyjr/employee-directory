import React from "react";

function SearchByName(props) {
    return (
    <div>
        <input value={props.search} onChange={(event) => props.updateSearch(event.target.value)}/>
    </div>
    )
}

export default SearchByName

