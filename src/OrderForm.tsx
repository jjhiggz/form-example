import { ComponentProps, useState } from "react";
import {
  Order,
  isValidSize,
  isValidTopping,
  validSizes,
  validToppings,
} from "./App";

const TextInput = ({
  label,
  inputProps,
  error,
}: {
  label: string;
  inputProps: ComponentProps<"input">;
  error: string;
}) => {
  return (
    <>
      <div>
        <span>
          <label htmlFor={label}>{label}</label>
        </span>
        <span>
          <input type="text" {...inputProps} />
        </span>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};

export const OrderForm = ({
  handleOrderInformation,
}: {
  handleOrderInformation: (input: Order) => void;
}) => {
  const [nameInput, setNameInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [topping1Input, setTopping1Input] = useState("");
  const [topping2Input, setTopping2Input] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSizeInputValid = isValidSize(sizeInput);
  const isTopping1InputValid = isValidTopping(topping1Input);
  const isTopping2InputValid = isValidTopping(topping2Input);

  const sizeError =
    !isSizeInputValid && isSubmitted
      ? `Size should be ${validSizes.join(" | ")}`
      : "";

  const topping1Error =
    !isTopping1InputValid && isSubmitted
      ? `Topping should be ${validToppings.join(" | ")}`
      : "";

  const topping2Error =
    !isTopping1InputValid && isSubmitted
      ? `Topping should be ${validToppings.join(" | ")}`
      : "";

  return (
    <form
      action=""
      className="order-form"
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (
          !isSizeInputValid ||
          !isTopping1InputValid ||
          !isTopping2InputValid
        ) {
          alert("you done fked up");
          return;
        }

        handleOrderInformation({
          name: nameInput,
          size: sizeInput,
          topping1: topping1Input || undefined,
          topping2: topping2Input || undefined,
        });
      }}
    >
      <h3>Order Form</h3>
      <TextInput
        label={"Name"}
        inputProps={{
          placeholder: "Name",
          onChange: (e) => {
            setNameInput(e.target.value);
          },
          value: nameInput,
        }}
        error=""
      />
      <TextInput
        label={"Size"}
        inputProps={{
          placeholder: "Size",
          onChange: (e) => {
            setSizeInput(e.target.value);
          },
          value: sizeInput,
          list: "sizes",
        }}
        error={sizeError}
      />
      <TextInput
        label={"Topping 1"}
        inputProps={{
          placeholder: "Topping 1",
          onChange: (e) => {
            setTopping1Input(e.target.value);
          },
          value: topping1Input,
          list: "toppings",
        }}
        error={topping1Error}
      />
      <TextInput
        label={"Topping 2"}
        inputProps={{
          placeholder: "Topping 2",
          onChange: (e) => {
            setTopping2Input(e.target.value);
          },
          value: topping2Input,
          list: "toppings",
        }}
        error={topping2Error}
      />
      <button type="submit">Submit MFer</button>
    </form>
  );
};
