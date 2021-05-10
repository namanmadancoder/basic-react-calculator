import React from "react";
import { useState } from "react";
import "./App.css";

export const Calculator = () => {
  const [output, setOutput] = useState("0");


  if (output.startsWith("0") && output.length !== 1) {
    setOutput(output.replace("0", ""));
  }


  const clicked = (e) => {
  
    setOutput(output.concat(e.target.name));
  };
  const allClear = () => {
    setOutput("0");
  };
  const backspace = () => {
    setOutput(output.slice(0, output.length - 1));
  };
  const equals = () => {
    try {
      setOutput(eval(output) + "");
    } catch (error) {
      setOutput("Error");
    }
  };

  const percentage = (e) => {
    let x = parseInt(output )/ 100;
    x = x.toString();
  

    setOutput(x);
  };

  return (
    <>
      <div className="calContainer">
        <form>
          <input id="input" type="text" value={output} />
        </form>
        <div className="keypad">
          <button onClick={allClear} className="numbersOp1">
            AC
          </button>
          <button onClick={backspace} className="numbersOp1">
            &#8920;
          </button>
          <button onClick={percentage} name="&#37;" className="numbersOp1">
            &#37;
          </button>
          <button name="/" onClick={clicked} className="numbersOp">
            &divide;
          </button>
          <button name="7" onClick={clicked} className="numbers">
            7
          </button>
          <button name="8" onClick={clicked} className="numbers">
            8
          </button>
          <button name="9" onClick={clicked} className="numbers">
            9
          </button>
          <button name="*" onClick={clicked} className="numbersOp">
            &times;
          </button>
          <button name="4" onClick={clicked} className="numbers">
            4
          </button>
          <button name="5" onClick={clicked} className="numbers">
            5
          </button>
          <button name="6" onClick={clicked} className="numbers">
            6
          </button>
          <button name="-" onClick={clicked} className="numbersOp">
            &ndash;
          </button>
          <button name="1" onClick={clicked} className="numbers">
            1
          </button>
          <button name="2" onClick={clicked} className="numbers">
            2
          </button>
          <button name="3" onClick={clicked} className="numbers">
            3
          </button>
          <button name="+" onClick={clicked} className="numbersOp">
            +
          </button>
          <button name="2.718" onClick={clicked} className="numbers">
            e
          </button>
          <button name="0" onClick={clicked} className="numbers">
            0
          </button>
          <button name="." onClick={clicked} className="numbers">
            .
          </button>
          <button onClick={equals} className="numbersOp">
            =
          </button>
        </div>
      </div>
    </>
  );
};
