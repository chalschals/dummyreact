import React, { useEffect, useState } from "react";
import { getData } from "../service/TitleService";
import EachTile from "./EachTile";
function Tiles() {
  const [fileData, setFileData] = useState({});
  const tilesData = [];
  useEffect(() => {
    getData().then((result) => {
      let tempObj = {};
      result.forEach((doc) => {
        if (doc.docType in tempObj) {
          tempObj[doc.docType].push({ doc_name: doc.docName });
        } else {
          tempObj[doc.docType] = [{ doc_name: doc.docName }];
        }
      });
      setFileData(tempObj);
    });
  }, []);

  for (const [key, value] of Object.entries(fileData)) {
    tilesData.push(<EachTile key={key} name={value} />);
  }

  return <div>{tilesData}</div>;
}

export default Tiles;
