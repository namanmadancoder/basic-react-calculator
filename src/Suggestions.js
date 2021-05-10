import { Suggestion } from "./Suggestion";
import { AddSuggestion } from "./AddSuggestion";

import "./App.css";

export const Suggestions = (props) => {
  return (
    <div className="SuggContainer">
      <h3 className="aboutHeading">Suggestions</h3>
      <AddSuggestion addSuggestion={props.addSuggestion} />

      {props.suggestions.length === 0 ? (
        <h7 id="bb">No suggestions yet! </h7>
      ) : (
        props.suggestions.map((suggestion) => {
          return (
            <>
              <div className="horizontal">
                <Suggestion
                  suggestion={suggestion}
                  key={suggestion.sno}
                  onDelete={props.onDelete}
                />
              </div>
            </>
          );
        })
      )}
    </div>
  );
};
