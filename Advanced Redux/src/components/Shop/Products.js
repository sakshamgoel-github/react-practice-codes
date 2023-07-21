import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Oranges",
    price: 10,
    description:
      "The orange is a usually round or oval citrus; its rind and flesh are generally orange, except the varieties of red pulp.",
  },
  {
    id: "p2",
    title: "Bananas",
    price: 30,
    description:
      `Its form is in penis shape. The smallest bananas are no larger than 3" found in Indonesia, while others may be 7" long especially found in Africa. `,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
