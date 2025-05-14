import { Link } from "react-router-dom";

const products = [
  { id: 'p1', title: 'Product 1' },
  { id: 'p2', title: 'Product 2' },
  { id: 'p3', title: 'Product 3' },
];

function ProductsPage() {
  return <>
    <h1>The Products Page</h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>))}
    </ul>
    <p><Link to="..">Back</Link></p>
  </>;
}

export default ProductsPage;