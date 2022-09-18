import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getProductById } from "../../service/product-service";

export default function Product() {
  const { idProduct } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = React.useState({});

  async function productById() {
    getProductById(idProduct)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function addItemToCart(id) {
    console.log(id);
    navigate("/cart");
  }

  React.useEffect(() => {
    productById();
  }, []);

  return (
    <div className="row m-0 align-items-start justify-content-between my-4">
      <div className="col-sm-12 col-md-6 mb-4">
        <img
          src={"../img/" + product.img_name}
          width={450}
          alt={product.name}
          className="img-thumbnail"
        />
      </div>
      <div className="card col-sm-12 col-md-6 p-2">
        <h1 className="fs-2 fw-semibold">{product.name}</h1>
        <p className="fw-normal">
          <CurrencyFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"USD "}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </p>

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
