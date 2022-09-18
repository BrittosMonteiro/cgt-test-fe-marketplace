import * as React from "react";
import { Link } from "react-router-dom";
import { getProductList } from "../../service/product-service";
import { getHighlightItem } from "../../service/highlight-service";
import CurrencyFormat from "react-currency-format";

export default function Home() {
  const [productsList, setProductList] = React.useState([]);
  const [highlightItem, setHighlightItem] = React.useState({});

  async function getHighlight() {
    getHighlightItem()
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setHighlightItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function productList() {
    getProductList()
      .then((res) => res.json())
      .then((res) => {
        setProductList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    productList();
    getHighlight();
  }, []);

  const banner_color = ["bg-danger", "bg-primary"];

  return (
    <div>
      <div className="row py-4 hover-shadow align-items-center">
        <div className="col-sm-12 col-md-6 mb-4">
          <span
            className={`fw-black fs-1 text-white p-2 shadow
                ${banner_color[highlightItem.tag_color]}
                `}
          >
            {highlightItem.tag}
          </span>
          <p className="fs-5 my-4 fw-light">{highlightItem.description}</p>
          <Link
            to={`/product/${highlightItem.id}`}
            className="btn btn-md btn-success rounded-0"
          >
            Check it here!
          </Link>
        </div>
        <div className="col-sm-12 col-md-6">
          <img
            src={"img/" + highlightItem.img_name}
            alt={highlightItem.name}
            title={highlightItem.name}
            className="img-thumbnail rounded-sm"
          />
        </div>
      </div>

      <hr />

      <div className="container py-2 px-0">
        <span className="fw-light fs-4 p-2 mb-4">ALL PRODUCTS</span>
        <div className="row mt-4 p-3 d-flex align-items-stretch">
          {productsList.map((product, key) => (
            <div
              className="col-sm-12 col-md-6 col-lg-3 mb-4 align-items-stretch"
              key={key}
            >
              <div className="card rounded-0">
                <img
                  src={`img/${product.img_name}`}
                  alt={product.name}
                  title={product.name}
                  className="container__img"
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
    </div>
  );
}
