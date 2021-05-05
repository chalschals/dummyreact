import React, { useEffect,useState } from "react";
import { getDocData } from "../service/TitleService";

export default function EachTile(props) {

  const [docsData,setDocsData] = useState([]);

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
      setDocsData(tempObj);
    });
  }, [props.form_id]);


  const splitDocumentName = (docObj) => {
    return docObj.map((document, key) => <p key={key}>{document.doc_name}</p>);
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
  for (const [key, eachDocObj] of Object.entries(docsData)) {
    tiles.push(
      <div key={key} style={tile_style}>
       <h3>{props.title}</h3>
       {splitDocumentName(eachDocObj)}
     </div>
    );
  }
  return tiles.map((echTile) => echTile);
}
