const products = [
  {
    id: 1,
    name: "Phone",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$1330",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
  },
];

const ProductList = () => {
  return products.map(({ id, name, price }) => (
    <ul key={id}>
      <li>{id}</li>
      <li>{name}</li>
      <li>{price}</li>
    </ul>
  ));
};

export default ProductList;
