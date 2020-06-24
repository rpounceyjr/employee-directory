import React from "react";

function SearchByName(props) {
    return (
        
        <form>
            <label>Search by Name</label>
            <input value={props.search} onChange={(event) => props.updateSearch(event.target.value)} />
            <button onClick={props.handleFormSubmit} className="btn btn-secondary mt-3">
          Search
        </button>
        </form>
    
    )
}

export default SearchByName

