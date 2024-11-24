import { pageData } from "../../constants/index.js";
import React from "react";
import AnimationCard from "../animationCard/page";
import Link from "next/link.js";

const CardsList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-no">
      {pageData.map((card, index) => (
        <Link key={index} href={card.route}>
          <AnimationCard
            image={card.image}
            title={card.title}
            bgColor={index % 2 !== 0 ? "bg-gray-200 lg:bg-inherit " : ""}
            bgHeight={
              card.title === "Čišćenje posle građevinskih radova"
                ? "h-[115px] lg:h-[150px]"
                : "h-[65px] lg:h-[90px]"
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default CardsList;
