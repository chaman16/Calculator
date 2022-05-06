import React from "react";
import "./App.css";

function app(){
let [result,setResult]=React.useState("");
const handleClick=(e)=>{
  setResult(result.concat(e.target.name));
}

let [fresult,setFResult]=React.useState("");
let [sresult,setSResult]=React.useState("");
let [tresult,setTResult]=React.useState("");
let ans="";
function clear(){
  setTResult(sresult);
    setSResult(fresult);
    setFResult(result);
setResult("");
}
function plusMinus(){
  let k=parseInt(result);
  console.log(k);
  k<0?(result=result.slice(1,result.length)):(result="-"+result);
  setResult(result);
}

function calculate(){
  try {
    setTResult(sresult);
      setSResult(fresult);
      setFResult(result);
      ans=eval(result).toString();
     setResult(ans);
     console.log(ans);

  } catch (e) {
    setResult("Error");
  } finally {

  }

}
  return (
     <div className ="container">
        <h1 className="thirdHeading">{tresult}</h1>
        <h1 className="secondHeading" >{sresult}</h1>
        <h1>{fresult}</h1>
        <form>
           <input type ="text" value={result}/>
        </form>
        <div className ="keyPad">
        <div className="rectangle">
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
        </div>
        <div className="keys">
          <button className="clear" onClick={clear}>C</button>
          <button className="sign" onClick={plusMinus}>+/-</button>
          <button className="sign" name="%" onClick={handleClick}>%</button>
          <button className="arthmetic" name="/" onClick={handleClick}>÷</button>
          <button className="number" name="7" onClick={handleClick}>7</button>
          <button className="number" name="8" onClick={handleClick}>8</button>
          <button className="number" name="9" onClick={handleClick}>9</button>
          <button className="arthmetic" name="*" onClick={handleClick}>×</button>
          <button className="number" name="4" onClick={handleClick}>4</button>
          <button className="number" name="5" onClick={handleClick}>5</button>
          <button className="number" name="6" onClick={handleClick}>6</button>
          <button className="arthmetic" name="-" onClick={handleClick}>-</button>
          <button className="number" name="1" onClick={handleClick}>1</button>
          <button className="number" name="2" onClick={handleClick}>2</button>
          <button className="number" name="3" onClick={handleClick}>3</button>
          <button className="arthmetic" name="+" onClick={handleClick}>+</button>
          <button  name="0" onClick={handleClick} id="zero">0</button>
          <button className="number" name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>


     </div>



  );
}

export default app;
