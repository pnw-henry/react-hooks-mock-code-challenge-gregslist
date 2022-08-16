import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => {
        setListings(listings);
      });
  }, []);
  function onDeleteListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }
  const listingDisplay = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer listings={listingDisplay} onDelete={onDeleteListing} />
    </div>
  );
}

export default App;
