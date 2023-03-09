import React from "react";
import "./buttons.css";
import { useState } from "react";
import PropTypes from "prop-types";

export const RemoveButton = ({ removeItem, id }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRemove = () => {
    setShowPopup(true);
  };

  const confirmRemove = () => {
    removeItem(id);
  };

  const cancelRemove = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button className="remove" onClick={handleRemove}>
        Remove
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Are you sure you want to remove this item?</h3>
            <button className="popup-button" onClick={confirmRemove}>
              Yes
            </button>
            <button className="popup-button" onClick={cancelRemove}>
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

RemoveButton.propTypes = {
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
