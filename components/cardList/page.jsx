import { pageData } from "../../constants/index.js";
import React from "react";
import AnimationCard from "../animationCard/page";
import Link from "next/link.js";

const CardsList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-no py-[50px]">
      {pageData.map((card, index) => (
        <Link key={index} href={card.route}>
          <AnimationCard
            image={card.image}
            title={card.title}
            description={card.description}
            bgColor={index % 2 !== 0 ? "bg-gray-200 lg:bg-inherit " : ""}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardsList;
