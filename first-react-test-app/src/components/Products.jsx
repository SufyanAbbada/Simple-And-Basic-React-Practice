import React from "react";
import "./products.css";

const Products = (props) => {
  var colorClass = props.price <= 150 ? "green" : "red";
  {
    /*We can destructure our props also by getting names of variables. */
  }
  //console.log(props);

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={colorClass}>
        <b>Price : </b> {props.price}
      </p>
      <button
        onClick={() => {
          props.adding(props.title);
        }}
      >
        {/*Now here we are calling the function that is in parent but we have got in props and it will call that function and pass that value to it and that will show the alert message.*/}
        Add to Cart
      </button>
      <hr />
    </div>
  );
};

export default Products;
//Lets import it on App.js file to show it on the screen.
