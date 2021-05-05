import React, { useEffect,useState } from "react";
import { getDocData } from "../service/TitleService";

export default function EachTile(props) {

  const [tlsData,setTls] = useState([]);

  useEffect(() => {
    getDocData(props.form_id).then((result) => {
      let tempObj = {};
      result.forEach((doc) => {
        if (doc.docType in tempObj) {
          tempObj[doc.docType].push({ doc_name: doc.docName });
        } else {
          tempObj[doc.docType] = [{ doc_name: doc.docName }];
        }
      });
      setTls(tempObj);
    });
  }, [props.form_id]);


  const splitDocumentName = (docsData) => {
    return docsData.map((document, key) => <p key={key}>{document.doc_name}</p>);
  }
  const tile_style = {
    width: "200px",
    height: "200px",
    display: "inline-block",
    background: "gray",
    margin: "10px",
    overflow: "hidden",
  };
  const tiles = [];
  for (const [key, value] of Object.entries(tlsData)) {
    tiles.push(
      <div key={key} style={tile_style}>
       <h3>{props.title}</h3>
       {splitDocumentName(value)}
     </div>
    );
  }
  return tiles.map((echTilr) => echTilr);
}
