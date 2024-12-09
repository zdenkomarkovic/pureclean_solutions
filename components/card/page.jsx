import Image from "next/image";
import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div className="px-2 container lg:pb-[50px]  mx-auto lg:px-10 text-center">
      <h1 className="text-[34px] lg:text-[50px] py-[30px] pt-[60px] lg:pt-[90px] text-center text-primary">
        {title}
      </h1>
      <div className=" lg:flex gap-20 items-center">
        <Image
          src={image}
          width={750}
          height={600}
          alt="ciscenje"
          className="rounded-3xl"
        />
        <div className="lg:text-left py-[30px] lg:py-0">
          <p className="text-[18px] lg:text-[28px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
