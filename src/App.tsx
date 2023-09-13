import { useState } from "react";
import "./App.css";
import { OrderForm } from "./OrderForm";
import { YourOrder } from "./YourOrder";

// The only available toppings are "pepperoni" | "olives" | "sausage"
// The only valid sizes are "xl" | "l" | "m"
// name must be at least 2 characters

export const validToppings = ["pepperoni", "olives", "sausage"] as const;
type ValidTopping = (typeof validToppings)[number];

export const validSizes = ["xl", "l", "m"] as const;
type ValidSize = (typeof validSizes)[number];

export const isValidSize = (input: string): input is ValidSize => {
  return validSizes.includes(input as ValidSize);
};

export const isValidTopping = (input: string): input is ValidTopping => {
  return validToppings.includes(input as ValidTopping);
};

export type Order = {
  topping1?: ValidTopping;
  topping2?: ValidTopping;
  size: ValidSize;
  name: string;
};

function App() {
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  return (
    <div className="page">
      <datalist id="sizes">
        {validSizes.map((size) => (
          <option key={size}>{size}</option>
        ))}
      </datalist>
      <datalist id="toppings">
        {validToppings.map((topping) => (
          <option key={topping}>{topping}</option>
        ))}
      </datalist>
      <YourOrder order={currentOrder} />
      <OrderForm handleOrderInformation={setCurrentOrder} />
    </div>
  );
}

export default App;
