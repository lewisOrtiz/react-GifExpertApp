import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GiftGrifItem from "./GiftGridItem";

const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <div className="giftGrid animate__animated animate__flipInX">
        <h2>{category}</h2>
        {loading && <p>loading...</p>}
        {images.map((img) => (
          <GiftGrifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
