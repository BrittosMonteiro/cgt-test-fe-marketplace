import * as React from "react";
import { useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getProductById } from "../../service/product-service";
import { useCartOptions } from "../../context/CartContext";

export default function Product() {
  const { idProduct } = useParams();
  // const navigate = useNavigate();
  const { addItemToCart } = useCartOptions();

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

  React.useEffect(() => {
    productById();
  }, []);

  return (
    <React.Fragment>
      <div className="row m-0 align-items-start justify-content-between my-4">
        <div className="col-sm-12 col-md-6 mb-4">
          <img
            src={"../img/" + product.img_name}
            width={450}
            alt={product.name}
            className="img-thumbnail rounded-0"
          />
        </div>
        <div className="col-sm-12 col-md-6 p-2">
          <div className="card p-2 rounded-0">
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
          </div>
          <button
            className="btn btn-sm btn-primary rounded-0 mt-4"
            onClick={() => addItemToCart(product)}
          >
            Add to my cart
          </button>
        </div>
      </div>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <td className="fw-light">Product</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td className="fw-light">Description</td>
              <td>{product.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
