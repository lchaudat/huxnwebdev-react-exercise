interface Products {
  name: String;
  price: String;
}

const Product = function ({ name, price }: Products) {
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
    </>
  );
};

export default Product;
