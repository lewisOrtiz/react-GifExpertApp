import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";
import "./GiftExpertApp.css";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState(["football"]);

  const AddCat = (newCat) => {
    setCategories((cats) => [newCat, ...cats]);
  };

  return (
    <div>
      <h2>GifExpertApp</h2>

      <AddCategory addCats={AddCat} />

      <hr />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
}
