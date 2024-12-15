import React from "react";

const KraciText = ({ text, hasAnimated }) => {
  const skracenText = text.substring(0, 120) + "...";
  console.log(text);
  return (
    <p
      className={`absolute z-20 bottom-0 p-[10px] text-[17px] text-white transform transition-all duration-1000 ease-in-out ${
        hasAnimated ? " opacity-100" : " opacity-10"
      }`}
    >
      {skracenText}
    </p>
  );
};

export default KraciText;
