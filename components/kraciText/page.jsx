import React from "react";

const KraciText = ({ text }) => {
  const skracenText = text.substring(0, 60) + "...";
  console.log(text);
  return <p>{skracenText}</p>;
};

export default KraciText;
