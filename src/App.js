import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Products } from "./pages/Products";
import { Root } from "./pages/Root";
import Error from "./pages/Error";
import { ProductDetail } from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    //wrapper
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },   // :productId signals that the path is dynamic
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
