import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.id}</p>
    </div>
  );
}

export default ProductDetails;
