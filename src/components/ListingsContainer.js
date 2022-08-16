import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  console.log(listings);
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.key}
              listing={listing}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
