import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Calculator } from "./Calculator";
import { Footer } from "./Footer";
import { Suggestions } from "./Suggestions";
import { About } from "./About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initSuggestion;
  if (localStorage.getItem("") === null) {
    initSuggestion = [];
  } else {
    initSuggestion = JSON.parse(localStorage.getItem("suggestions"));
  }

  const onDelete = (suggestion) => {
    console.log("I am ondelete of todo", suggestion);
    // Deleting this way in react does not work
    // let index = suggestions.indexOf(todo);
    // suggestions.splice(index, 1);

    setsuggestions(
      suggestions.filter((e) => {
        return e !== suggestion;
      })
    );
    console.log("deleted", suggestions);
    localStorage.setItem("suggestions", JSON.stringify(suggestions));
  };

  const addSuggestion = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (suggestions.length === 0) {
      sno = 0;
    } else {
      sno = suggestions[suggestions.length - 1].sno + 1;
    }
    const mySuggestion = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setsuggestions([...suggestions, mySuggestion]);
    console.log(mySuggestion);
  };

  const [suggestions, setsuggestions] = useState(initSuggestion);
  useEffect(() => {
    localStorage.setItem("suggestions", JSON.stringify(suggestions));
  }, [suggestions]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Calculator}></Route>

          <Route exact path="/Suggestions">
            <Suggestions
              suggestions={suggestions}
              onDelete={onDelete}
              addSuggestion={addSuggestion}
            />
          </Route>
          <Route exact path="/About" component={About}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
