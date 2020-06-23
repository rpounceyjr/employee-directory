import React from "react";

function SearchByName(props) {
    return (
        <div>
            <label for="exampleInputPassword1">Search by Name</label>
            <input value={props.search} onChange={(event) => props.updateSearch(event.target.value)} />
            <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
        </div>
    )
}

export default SearchByName

