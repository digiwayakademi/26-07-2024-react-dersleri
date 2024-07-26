import { useState } from "react";
import "./ProductItem.css";
import ProductInfo from "./ProductInfo";
import Counter from "../Counter";

//use state hook

const ProductItem = ({ product }) => {
  const { imageUrl, productTitle, productPrice } = product;

  const [title, setTitle] = useState(productTitle);

  const [counter, setCounter] = useState(productPrice);

  const clickHandler = () => {
    setTitle("Güncellendi");
    console.log(productTitle, "Güncellendi");
  };

  // const myButton = document.getElementById("myButton");

  // myButton.addEventListener("click", function () {
  //   console.log("Sepete Eklendi");
  // });

  return (
     <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <ProductInfo>
          <h2 className="product-title">{title}</h2>
          <Counter
            
            counter={counter}
            setCounter={setCounter}
          >
            <h3 className="product-price">{counter} TL</h3>
          </Counter>
          <br />
          <button onClick={clickHandler}>Güncelle</button>
        </ProductInfo>
      </div>
    </div>
  );
};

export default ProductItem;
