import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

export default function ProductsList(props) {
  return (
    <div className="container py-2 px-0">
      <span className="fw-light fs-4 p-2 mb-4">ALL PRODUCTS</span>
      <div className="row mt-4 p-3 d-flex align-items-stretch">
        {props.list.map((product, key) => (
          <div
            className="col-sm-12 col-md-6 col-lg-3 mb-4 align-items-stretch"
            key={key}
          >
            <div className="card rounded-0">
              <img
                src={`img/${product.img_name}`}
                alt={product.name}
                title={product.name}
                className="container__img rounded-0"
              />
              <div className="card-body">
                <span>
                  <Link className="fw-light" to={`/product/${product.id}`}>
                    {product.name}
                  </Link>
                </span>
                <p className="fw-light p-0 m-0">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
