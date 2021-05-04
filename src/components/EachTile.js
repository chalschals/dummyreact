import React from "react";

export default function EachTile(props) {
  const tile_style = {
    width: "200px",
    height: "200px",
    display: "inline-block",
    background: "gray",
    margin: "10px",
    overflow: "hidden",
  };
  const docNames =
    props.name &&
    props.name.map((document, key) => <p key={key}>{document.doc_name}</p>);
  return <div style={tile_style}>{docNames}</div>;
}
