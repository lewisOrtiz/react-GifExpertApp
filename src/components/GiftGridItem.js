import React from "react";
import PropTypes from "prop-types";

const GiftGridItem = ({ url, title }) => {
  return (
    <div className="item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GiftGridItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GiftGridItem;
