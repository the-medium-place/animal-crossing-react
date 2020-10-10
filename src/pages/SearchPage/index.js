import React from 'react';
import SearchBar from '../../components/SearchBar';

export default function Index({ loggedInUser }) {

    console.log(loggedInUser);

    return (
        <div className="container">
            <h1 className="center-align green-text accent-5">SEARCH PAGE</h1>
            <SearchBar loggedInUser={loggedInUser} />
        </div>
    )
}
