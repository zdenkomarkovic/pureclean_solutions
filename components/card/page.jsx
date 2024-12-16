import Image from "next/image";
import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div className="px-2 container pb-[50px]  mx-auto lg:px-10 text-center">
      <h1 className="text-[34px] lg:text-[50px] py-[30px] pt-[60px] lg:pt-[90px] text-center text-primary">
        {title}
      </h1>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20 items-center  lg:py-[30px]">
        <Image
          src={image}
          width={700}
          height={600}
          alt="ciscenje"
          className="rounded-3xl py-[15px] lg:py-0"
        />
        <div className="text-left ">
          {description.map((text, i) => {
            if (i < 2)
              return (
                <p
                  key={i}
                  className="text-[18px] lg:text-[20px] indent-2ch py-[15px]"
                >
                  {text}
                </p>
              );
          })}
          {/* <p className="text-[18px] lg:text-[20px]">{description}</p> */}
        </div>
      </div>
      {description.map((text, i) => {
        if (i > 1)
          return (
            <p
              key={i}
              className="text-[18px] lg:text-[20px] indent-2ch py-[15px] text-left"
            >
              {text}
            </p>
          );
      })}
    </div>
  );
};

export default Card;
