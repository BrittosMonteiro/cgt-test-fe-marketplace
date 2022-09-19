import * as React from "react";
import { Link } from "react-router-dom";
import { getProductList } from "../../service/product-service";
import { getHighlightItem } from "../../service/highlight-service";
import CurrencyFormat from "react-currency-format";
import ProductsList from "./ListProducts";
import HighlightSession from "./HighlightSession";

export default function Home() {
  const [productsList, setProductList] = React.useState([]);
  const [highlightItem, setHighlightItem] = React.useState({});

  async function getHighlight() {
    getHighlightItem()
      .then((res) => res.json())
      .then((res) => {
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

  return (
    <div>
      <HighlightSession highlightItem={highlightItem} />
      <hr />
      <ProductsList list={productsList} />
    </div>
  );
}
