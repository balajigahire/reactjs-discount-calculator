import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <DiscountCalculator />
    </div>
  );
}

function DiscountCalculator() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const finalPrice = price - (price * discount) / 100;

function handleReset(){
    setPrice(0);
    setDiscount(0);
  }

  return (
    <div>
      <ProductPrice price={price} setPrice={setPrice} />
      <DiscountPer discount={discount} setDiscount={setDiscount} />
      <Output price={price} discount={discount} finalPrice={finalPrice} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

function ProductPrice({ price, setPrice }) {
  return (
    <div>
      <label>Enter Product Price</label>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        placeholder="Enter Product Price"
      />
    </div>
  );
}

function DiscountPer({ discount, setDiscount }) {
  return (
    <div>
      <label>Select Discount Percentage</label>
      <select value={discount} onChange={(e) => setDiscount(e.target.value)}>
        <option value="5">You Save: 5%</option>
        <option value="10">You Save: 10%</option>
        <option value="15">You Save: 15%</option>
        <option value="20">You Save: 20%</option>
      </select>
    </div>
  );
}

function Output({ price, discount, finalPrice }) {
  return (
    <div>
      <p>
        Product Price Rs. {price} - {discount}% off, Discounted Price Rs.{" "}
        {finalPrice}
      </p>
    </div>
  );
}

function Reset({handleReset}) {
  return <div>
    <button onClick={handleReset}>Reset</button>
  </div>
}
