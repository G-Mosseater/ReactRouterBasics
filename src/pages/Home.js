import { Link, useNavigate } from "react-router-dom";
export default function Home() {

  const navigate = useNavigate()

function navigateHandler() {
    navigate("/products")
}

  return (
    <>
      <h1>HOME</h1>
      <p>
        Go to <Link to="/products"> List of stuff</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Go to products</button>
      </p>
    </>
  );
}
