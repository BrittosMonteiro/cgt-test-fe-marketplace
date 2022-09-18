import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import img_path_a from "../../assets/a.jpg";
import img_path_b from "../../assets/b.jpg";

export default function Product() {
  const { idProduct } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = React.useState({});

  async function getProductById() {
    setProduct({
      name: "Product A",
      price: 10,
    });
  }

  async function addItemToCart(id) {
    console.log(id);
    navigate("/cart");
  }

  React.useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="row m-0 align-items-start justify-content-between my-4">
      <div className="col-sm-12 col-md-6 mb-4">
        <img
          src={img_path_b}
          width={450}
          alt={product.name}
          className="img-thumbnail"
        />
      </div>
      <div className="card col-sm-12 col-md-6 p-2">
        <h1 className="fs-2 fw-semibold">{product.name}</h1>
        <p className="fw-normal">Price: {product.price}USD</p>

        <button
          className="btn btn-sm btn-primary rounded-sm"
          onClick={() => addItemToCart(idProduct)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
