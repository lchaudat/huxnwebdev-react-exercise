import { FormEvent, useState } from "react";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const submitHandler = (elem: FormEvent) => {
    elem.preventDefault();

    const newItem = {
      name,
      quantity,
    };

    setShoppingList((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity(0);
  };

  return (
    <>
      <div>Shopping List</div>

      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button type="submit">Add to list</button>
      </form>

      {shoppingList.map((item, index) => {
        return (
          <li key={index}>
            {item.quantity} - {item.name}
          </li>
        );
      })}
    </>
  );
};

export default ShoppingList;
