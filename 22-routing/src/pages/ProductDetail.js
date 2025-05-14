import { Link, useParams } from "react-router-dom"

export default function ProductDetail() {
  const params = useParams();

  return <>
    <h1>Product details for {params.productId}!</h1>
    <p><Link to="/products">Back</Link></p>
  </>
}