import { Link} from "react-router-dom";
const Products = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/product/Book">Book</Link>
        </li>
        <li>
          <Link to="/product/Pencil">Pencil</Link>
        </li>
        <li>
          <Link to="/product/Table">Table</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
