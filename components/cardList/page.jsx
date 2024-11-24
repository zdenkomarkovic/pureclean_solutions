import { pageData } from "@/app/constants";
import React from "react";
import AnimationCard from "../animationCard/page";

const CardsList = () => {
  // Podaci za kartice (slika, naslov, tekst)
  const cardsData = [
    {
      image: "/ciscenje.jpg",
      title: "Čišćenje",
      route: "/ciscenje",
    },
    {
      image: "/generalnociscenje.jpg",
      title: "Generalno čišćenje",
      route: "/generalnoCiscenje",
    },
    {
      image: "/gradjevinsko.jpg",
      title: "Čišćenje posle građevinskih radova",
      route: "/CiscenjePosleGradjevinskihRadova",
    },
    {
      image: "/dubinsko.jpg",
      title: "Dubinsko pranje",
    },
    {
      image: "/generalnociscenje.jpg",
      title: "Restauracija",
    },
    {
      image: "/generalnociscenje.jpg",
      title: "Restauracija",
    },
    {
      image: "/generalnociscenje.jpg",
      title: "Cenovnik",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center bg-no">
      {pageData.map((card, index) => (
        <AnimationCard
          key={index}
          image={card.image}
          title={card.title}
          bgColor={index % 2 !== 0 ? "bg-gray-200 lg:bg-inherit " : ""}
          bgHeight={
            card.title === "Čišćenje posle građevinskih radova"
              ? "h-[115px] lg:h-[150px]"
              : "h-[65px] lg:h-[90px]"
          }
        />
      ))}
    </div>
  );
};

export default CardsList;
