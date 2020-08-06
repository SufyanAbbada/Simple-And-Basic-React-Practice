import React from "react";
//In order to attach css file in it, we simply will use
import Products from "./components/Products";
import Counter from "./components/counter";

const AddToCartClick = (name) => {
  alert("Button for Adding Clicked for " + name);
};

function App() {
  var [count, setCount] = React.useState(6);
  {
    /*This is the State of the Function and it can only be changed by the function next to it. 
    Similarly, the Starting value is given on right */
  }

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container" style={{ backgroundColor: "antiquewhite" }}>
      <h1 style={{ color: "green" }}>Hello From React</h1>
      <Products title="Land Cruiser" price="100" adding={AddToCartClick} />
      <Products title="Ferrari" price="500" adding={AddToCartClick} />
      {/* This PRoduct now can be used as many times as one wants */}
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
