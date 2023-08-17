import React from "react";
import FavoritesSlider from "../../components/Favorites/FavoritesSlider";
import RatingSlider from "../../components/Mobile/Rating";

function Favorites() {
  return (
    <div className="">
      <h1 className="text-2xl mx-16">Your Ratings</h1>
      <div className=" max-w-[100%] min-h-fit">
        <FavoritesSlider />
      </div>
      <div className=" max-w-[100%] min-h-fit">
        <RatingSlider />
      </div>
    </div>
  );
}

export default Favorites;
