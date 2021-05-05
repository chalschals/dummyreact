import React, { useEffect, useState } from "react";
import { getProduct } from "../service/TitleService";
import EachTile from "./EachTile";
function Tiles() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then((result) => {
      setProduct(result);
    });
  }, []);

  const progressTilesData = product
    .filter((pr) => pr.type === "INPROGRESS")
    .map((pr_in, keyoutter) => (
      <EachTile key={keyoutter} title={pr_in.product} form_id={pr_in.formid} />
    ));

  const completeTilesData = product
    .filter((pr) => pr.type === "COMPLETED")
    .map((pr_in, keyoutter) => (
      <EachTile key={keyoutter} title={pr_in.product} form_id={pr_in.formid} />
    ));

  return (
    <div>
      {progressTilesData}
      <hr />
      {completeTilesData}
    </div>
  );
}

export default Tiles;
