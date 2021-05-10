import React, { useState } from "react";

import "./App.css";

import "./App";

export const Suggestion = ({ suggestion, onDelete }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="title">{suggestion.title}</h5>
          <p className="desc">{suggestion.desc}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              onDelete(suggestion);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
