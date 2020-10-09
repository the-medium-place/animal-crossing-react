import React from 'react';
import SearchBar from '../../components/SearchBar';

export default function Index({ currentUser }) {

    console.log(currentUser);

    return (
        <div className="container">
            <h1 className="center-align green-text accent-5">SEARCH PAGE</h1>
            <SearchBar />
        </div>
    )
}
