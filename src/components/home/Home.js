import * as React from "react";
import { Link } from "react-router-dom";

import { getProductList } from "../../service/product-service";
// const productService = new ProductService();

export default function Home() {
  const [productsList, setProductList] = React.useState([]);

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
  }, []);

  const banner_color = ["bg-danger", "bg-primary"];

  return (
    <div>
      {productsList.map((product, key) => (
        <React.Fragment key={key}>
          <div className="row py-4 hover-shadow align-items-center">
            <div className="col-sm-12 col-md-6 mb-4">
              <span
                className={`fw-black fs-1 text-white p-2 shadow
                ${banner_color[product.tag_color]}
                `}
              >
                {product.tag}
              </span>
              <p className="fs-5 my-4 fw-light">{product.description}</p>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-md btn-success rounded-0"
              >
                Check it here!
              </Link>
            </div>
            <div className="col-sm-12 col-md-6">
              <img
                src={"img/" + product.img_name}
                alt={product.name}
                title={product.name}
                className="img-thumbnail rounded-sm"
              />
            </div>
          </div>
          {key < productList.length - 1 ? <hr /> : ""}
        </React.Fragment>
      ))}
    </div>
  );
}
