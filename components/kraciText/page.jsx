import React from "react";

const KraciText = ({ text, hasAnimated }) => {
  const skracenText = text.substring(0, 80) + "...";
  console.log(text);
  return (
    <p
      className={`absolute z-20 bottom-0 p-[10px] text-[20px] text-white transform transition-all duration-1000 ease-in-out ${
        hasAnimated ? " opacity-100" : " opacity-10"
      }`}
    >
      {skracenText}
    </p>
  );
};

export default KraciText;
