import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const ProductDetail = () => {
  const params = useParams(); // return an object that contaons every dynamic path segment we defined in route definition as a property

  return (
    <>
      <h1> Product details! </h1>
      <p> {params.productId}</p>
      <p>
        {/* relative path to go back 1 level */}
        <Link to=".." relative='path' > Back</Link>    
      </p>
    </>
  );
};
