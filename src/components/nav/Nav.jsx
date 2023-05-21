import React from "react";
import SearchBar from "../searchBar/SearchBar";

export default function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}