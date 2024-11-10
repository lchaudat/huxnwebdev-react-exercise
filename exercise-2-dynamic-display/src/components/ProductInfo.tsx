let product = { name: "laptop", price: "$1000", availibility: "in stock" };

const ProductInfo = () => {
  return (
    <div>
      <li>{product.name}</li>
      <li>{product.price}</li>
      <li>{product.availibility}</li>
    </div>
  );
};

export default ProductInfo;
