import React from "react";
import "./style.css"

function SearchByName(props) {
    return (
        
        <form  className="search-form">
        <div className="search-div">
            <label>Search by Name</label>
            <input className="search-input" value={props.search} onChange={(event) => props.updateSearch(event.target.value)} />
            <button onClick={props.handleFormSubmit} className="btn btn-secondary mt-3">
          Search
        </button>
        </div>
        </form>
    
    )
}

export default SearchByName

