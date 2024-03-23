import React, { useState } from "react";
import "./Calculator.css";
import { MdCancel } from "react-icons/md";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
  };

  const handleClearButtonClick = () => {
    setDisplayValue("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("NaN");
    }
  };

  return (
    <div className="calculator-div">
      <MdCancel size={24} />
      <h3>Calculator</h3>
      {/* <div className="calculator-input">{displayValue}</div> */}
      <div className="calculator-input-two">{}</div>
      <div className="calculator-input">{displayValue? displayValue : '0.00'}</div>
      <div className="calculator-input-divs">
        <button className="calculator-btn" onClick={() => handleButtonClick("7")}>7</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("8")}>8</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("9")}>9</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div className="calculator-input-divs">
        <button className="calculator-btn" onClick={() => handleButtonClick("4")}>4</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("5")}>5</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("6")}>6</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div className="calculator-input-divs">
        <button className="calculator-btn" onClick={() => handleButtonClick("1")}>1</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("2")}>2</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("3")}>3</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("*")}>*</button>
      </div>
      {/* <div className="calculator-input-divs">
        <button className="calculator-btn" onClick={() => handleButtonClick("0")}>0</button>
        <button className="calculator-btn" onClick={() => handleClearButtonClick()}>C</button>
        <button className="calculator-btn" onClick={() => handleCalculate()}>=</button>
        <button className="calculator-btn" onClick={() => handleButtonClick("/")}>/</button>
      </div> */}

      <div className="calculator-input-divs">
        <button  className="calculator-btn"  onClick={() => handleButtonClick('0')}>0</button>
        <button  className="calculator-btn"   onClick={() => handleButtonClick('.')}>.</button>
        <button  className="calculator-btn"  onClick={() => handleButtonClick('00')}>00</button>
        <button  className="calculator-btn" onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="calculator-input-divs">
        <button className="calculator-btn" style={{width: 136}}  onClick={() => handleClearButtonClick()}>C</button>
        <button className="calculator-btn"  style={{width: 136, backgroundColor:'#f21098'}}  onClick={() => handleCalculate()}>=</button>
      </div>

    </div>
  );
};

export default Calculator;
