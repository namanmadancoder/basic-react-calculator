import React from "react";
import "./App.css";
import { useState } from "react";

export const AddSuggestion = ({ addSuggestion }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Name or Suggestion cannot be blank");
    } else {
      addSuggestion(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div
      className="AddSuggestion"
      style={{
        marginRight: "300px",
        marginLeft: "300px",
        height: "17rem",
      }}
    >
      <h4
        style={{
          marginLeft: "100px",
          marginTop: "50px",
          fontSize: "28px",
          fontWeight: "400",
          fontFamily: "sans-serif",
        }}
      >
        Add a Suggestion!
      </h4>
      <form onSubmit={submit}>
        <div>
          <label> </label>
          <input
            aign="left"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              background: "white",
              color: "black",
              textAlign: "left",
              width: "500px",
              height: "35px",
              marginLeft: "100px",
              fontFamily: "serif",
              fontSize: "16px",
            }}
            placeholder="Name"
          />
        </div>
        <br></br>
        <div>
          <label> </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{
              background: "white",
              color: "black",
              textAlign: "left",
              width: "700px",
              height: "75px",
              marginLeft: "100px",
              fontSize: "16px",
              fontFamily: "serif",
            }}
            placeholder="suggestion"
          />
        </div>
        <button
          type="submit"
          style={{
            width: "70px",
            height: "35px",
            marginLeft: "100px",
            fontFamily: "serif",
            fontSize: "14px",
            borderRadius: "13px",
          }}
          className="btn-1 btn-primary mb-2"
        >
          submit
        </button>
      </form>
    </div>
  );
};
