import { Order } from "./App";

export const OrderItem = ({
  text,
  label,
  shouldShow,
}: {
  label: string;
  text: string;
  shouldShow: boolean;
}) => {
  return shouldShow ? (
    <div className="order-item">
      <span>
        <b>{label}:</b>
      </span>
      <span>{text}</span>
    </div>
  ) : (
    ""
  );
};
export const YourOrder = ({ order }: { order: Order | null }) => {
  return (
    <div className="your-order">
      <h3>Yor Order</h3>
      {order && (
        <div className="order-info-container">
          <OrderItem label={"Your Name"} text={order.name} shouldShow={true} />
          <OrderItem label={"Size"} text={order.size} shouldShow={true} />
          <OrderItem
            label={"Your first Topping"}
            text={order?.topping1 || ""}
            shouldShow={Boolean(order?.topping1)}
          />
          <OrderItem
            label={"Your second Topping"}
            text={order?.topping2 || ""}
            shouldShow={Boolean(order?.topping2)}
          />
        </div>
      )}
      {!order && <h3>Sorry your order does not exist</h3>}
    </div>
  );
};
